/**
 * Zod Error Adapter
 * 
 * Converts Zod validation errors to API errors.
 * Provides utilities for formatting and handling Zod errors.
 */

import { ZodIssueCode, ZodError, ZodIssue } from 'zod';
import { ApiError } from './error-handler';
import { ErrorCodes } from '../types';
import logger from './logger';

/**
 * Error format options
 */
export interface ErrorFormatOptions {
  includePathInMessage?: boolean;
  flattenErrors?: boolean;
  prefixFieldName?: boolean;
  /**
   * Sanitize sensitive fields in error messages
   * Default: true
   */
  sanitizeSensitiveFields?: boolean;
  /**
   * Fields to treat as sensitive (passwords, tokens, etc.)
   */
  sensitiveFields?: string[];
}

/**
 * Default sensitive fields that should be sanitized in error messages
 */
export const DEFAULT_SENSITIVE_FIELDS = [
  'password', 'token', 'secret', 'apiKey', 'key', 'auth',
  'credential', 'pin', 'otp', 'cvv', 'ssn', 'hash', 'salt'
];

/**
 * Formatted validation error
 */
export interface FormattedValidationError {
  path: (string | number)[];
  message: string;
  code: typeof ZodIssueCode[keyof typeof ZodIssueCode];
  details?: Record<string, any>;
}

/**
 * Zod Error Adapter class
 * 
 * Converts Zod validation errors into standardized API errors
 * with sanitized messages and proper formatting.
 */
export class ZodErrorAdapter {
  
  /**
   * Add sensitive field names to the sanitization list
   */
  /**
   * Convert a Zod error to an API error with sanitized messages
   *
   * @param error - Zod error
   * @param message - Optional custom message
   * @param statusCode - HTTP status code (default: 400)
   * @param options - Error format options
   * @returns API error
   */
  public static toApiError(
    error: ZodError,
    message: string = 'Validation failed',
    statusCode: number = 400,
    options: ErrorFormatOptions = {}
  ): ApiError {
    // Set default options
    const mergedOptions: ErrorFormatOptions = {
      sanitizeSensitiveFields: true,
      sensitiveFields: DEFAULT_SENSITIVE_FIELDS,
      ...options
    };
    
    try {
      const errors = this.formatZodError(error, mergedOptions);
      const errorMessage = options.includePathInMessage 
        ? this.createErrorMessage(error)
        : message;
      
      // Log the validation error for debugging (with sanitized data)
      logger.debug('Validation error', {
        message: errorMessage,
        errors: errors,
        code: ErrorCodes.VALIDATION_ERROR
      });
      
      return new ApiError(ErrorCodes.VALIDATION_ERROR, errorMessage, { errors }, statusCode);
    } catch (err) {
      logger.error('Error formatting Zod error', err);
      return new ApiError(ErrorCodes.VALIDATION_ERROR, message, null, statusCode);
    }
  }

  /**
   * Format a Zod error into a structured format with sanitized messages
   * 
   * @param error - Zod error
   * @param options - Error format options
   * @returns Formatted validation errors
   */
  public static formatZodError(
    error: ZodError,
    options: ErrorFormatOptions = {}
  ): FormattedValidationError[] {
    // Set default options
    const {
      includePathInMessage = true,
      sanitizeSensitiveFields = true,
      sensitiveFields = DEFAULT_SENSITIVE_FIELDS
    } = options;
    
    try {
      return error.issues.map((issue: any) => {
        const path = issue.path;
        const pathString = path.join('.');
        
        // Check if this is a sensitive field
        const isSensitiveField = sensitiveFields.some(field => 
          path.some((p: any) => String(p).toLowerCase().includes(field.toLowerCase()))
        );
        
        // Sanitize the message if it's a sensitive field
        let message = issue.message;
        if (sanitizeSensitiveFields && isSensitiveField) {
          // Replace specific values in the message with generic text
          message = this.sanitizeErrorMessage(message, pathString);
        }
        
        // Include path in message if requested
        if (includePathInMessage && path.length > 0) {
          message = `${pathString}: ${message}`;
        }
        
        const formatted: FormattedValidationError = {
          path,
          message,
          code: issue.code,
          details: this.extractIssueDetails(issue)
        };
        
        return formatted;
      });
    } catch (err) {
      logger.error('Error formatting Zod errors', err);
      // Return a simple fallback format
      return [{
        path: [],
        message: error.message || 'Validation failed',
        code: ZodIssueCode.custom,
        details: {}
      }];
    }
  }
  
  /**
   * Sanitize error messages for sensitive fields
   * 
   * @param message - Original error message
   * @param fieldName - Name of the field
   * @returns Sanitized message
   */
  private static sanitizeErrorMessage(message: string, fieldName: string): string {
    // Common patterns to sanitize
    const patterns = [
      // Remove specific values from messages
      /Expected .+, received .+/gi,
      /String must contain at least \d+ character\(s\)/gi,
      /String must contain at most \d+ character\(s\)/gi,
      /Invalid .+ format/gi,
      /Does not match pattern .+/gi,
    ];
    
    let sanitized = message;
    
    // Apply pattern-based sanitization
    patterns.forEach(pattern => {
      if (pattern.test(sanitized)) {
        sanitized = `Invalid ${fieldName}`;
      }
    });
    
    // If no patterns matched, use a generic message
    if (sanitized === message && fieldName) {
      sanitized = `Invalid ${fieldName} format`;
    }
    
    return sanitized;
  }
  
  /**
   * Extract additional details from a Zod issue
   * 
   * @param issue - Zod issue
   * @returns Additional details or undefined
   */
  private static extractIssueDetails(issue: ZodIssue): Record<string, any> | undefined {
    const details: Record<string, any> = {};
    
    switch (issue.code) {
      case ZodIssueCode.invalid_type:
        if ('expected' in issue) details.expectedType = (issue as any).expected;
        if ('input' in issue) details.receivedType = typeof (issue as any).input;
        break;
        
      case ZodIssueCode.invalid_value:
        if ('expected' in issue) details.expected = (issue as any).expected;
        if ('options' in issue) details.options = (issue as any).options;
        if ('received' in issue) details.received = (issue as any).received;
        break;
        
      case ZodIssueCode.unrecognized_keys:
        if ('keys' in issue) details.keys = (issue as any).keys;
        break;
        
      case ZodIssueCode.invalid_union:
        if ('errors' in issue) {
          details.unionErrors = (issue as any).errors.map((e: any) => 
            this.formatZodError(e)
          );
        }
        break;
        
      case ZodIssueCode.too_small:
        if ('minimum' in issue) {
          details.minimum = issue.minimum;
          if ('type' in issue) details.type = (issue as any).type;
          details.inclusive = issue.inclusive;
          if ('exact' in issue) details.exact = issue.exact;
        }
        break;
        
      case ZodIssueCode.too_big:
        if ('maximum' in issue) {
          details.maximum = issue.maximum;
          if ('type' in issue) details.type = (issue as any).type;
          details.inclusive = issue.inclusive;
          if ('exact' in issue) details.exact = issue.exact;
        }
        break;
        
      default:
        // For other issue types, include any non-standard properties
        Object.keys(issue).forEach(key => {
          if (!['code', 'path', 'message'].includes(key)) {
            details[key] = (issue as any)[key];
          }
        });
    }
    
    return Object.keys(details).length > 0 ? details : undefined;
  }

  /**
   * Create a simple error message from a Zod error
   * 
   * @param error - Zod error
   * @returns Simple error message
   */
  public static createErrorMessage(error: ZodError): string {
    return error.issues
      .map((err: any) => {
        const path = err.path.join('.');
        const prefix = path ? `${path}: ` : '';
        return `${prefix}${err.message}`;
      })
      .join('; ');
  }
}

export default ZodErrorAdapter;
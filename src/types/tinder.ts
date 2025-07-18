export interface TinderProfile {
  id?: string;
  name: string;
  age?: number;
  bio?: string;
  photos: string[];
  distance?: number;
  verified?: boolean;
  job?: string;
  company?: string;
  education?: string;
  location?: string;
  interests?: string[];
  languages?: string[];
  height?: string;
  zodiacSign?: string;
  personalityType?: string;
  relationshipType?: string;
}

export interface TinderMatch {
  id: string;
  profile: TinderProfile;
  matchedAt: Date;
  lastMessage?: TinderMessage;
  unreadCount?: number;
}

export interface TinderMessage {
  id: string;
  matchId: string;
  content: string;
  sentAt: Date;
  isFromMe: boolean;
  type: 'text' | 'emoji' | 'gif' | 'contact' | 'media';
  metadata?: {
    contactInfo?: string;
    mediaUrl?: string;
    emojiCode?: string;
  };
}

export interface TinderSettings {
  ageRange: {
    min: number;
    max: number;
  };
  maxDistance: number;
  showMe: 'men' | 'women' | 'everyone';
  interestedIn: 'men' | 'women' | 'everyone';
  globalMode: boolean;
  hideAge: boolean;
  hideDistance: boolean;
  onlyShowWithPhotos: boolean;
  recentlyActive: boolean;
}

export interface TinderSession {
  cookies: any[];
  userAgent: string;
  sessionId?: string;
  authToken?: string;
  userId?: string;
  isLoggedIn: boolean;
  lastActivity: Date;
}

export interface SwipeAction {
  profileId: string;
  action: 'like' | 'pass' | 'superlike';
  timestamp: Date;
  isMatch?: boolean;
}

export interface LoginCredentials {
  phoneNumber: string;
  countryCode: string;
  otpCode?: string;
  appleId?: {
    email: string;
    password: string;
    twoFactorCode?: string;
  };
}

export interface ProfileSetupData {
  photos?: string[];
  bio?: string;
  job?: string;
  company?: string;
  education?: string;
  school?: string;
  location?: string;
  interests?: string[];
  languages?: string[];
  height?: string;
  zodiacSign?: string;
  personalityType?: string;
  relationshipType?: string;
}

export interface DiscoveryCard {
  profile: TinderProfile;
  cardType: 'profile' | 'ad' | 'boost' | 'gold';
  canSuperLike: boolean;
  canRewind: boolean;
}

export interface BoostStatus {
  isActive: boolean;
  remainingTime?: number;
  boostsRemaining: number;
  nextBoostAvailable?: Date;
}

export interface SuperLikeStatus {
  superLikesRemaining: number;
  nextSuperLikeAvailable?: Date;
  dailyLimit: number;
}

export interface TinderError {
  code: string;
  message: string;
  details?: any;
  recoverable: boolean;
}

export interface BrowserContext {
  page: any; // Playwright Page
  context: any; // Playwright BrowserContext
  session: TinderSession;
}

export interface TinderToolResult {
  success: boolean;
  data?: any;
  error?: TinderError;
  message: string;
}

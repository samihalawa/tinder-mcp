const puppeteer = require('puppeteer'); // v23.0.0 or later

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1379,
            height: 801
        })
    }
    {
        const targetPage = page;
        await targetPage.goto('https://tinder.com/');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('span.P\\(0\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/main/div[1]/div/div/div/div/div/header/div/div[2]/div[1]/button/div[2]/div[2]/div/span[1])'),
            targetPage.locator(':scope >>> span.P\\(0\\)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 35.203125,
                y: 13.640625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#o787701392 li:nth-of-type(1) span:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[3]/ul/li[1]/a/span[1])'),
            targetPage.locator(':scope >>> #o787701392 li:nth-of-type(1) span:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 17.5,
                y: 6.6484375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.Fxs\\(0\\) > div:nth-of-type(2) div.c9iqosj'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/main/div[1]/div/div/div/div/div/header/div/div[2]/div[2]/a/div[2]/div[2])'),
            targetPage.locator(':scope >>> div.Fxs\\(0\\) > div:nth-of-type(2) div.c9iqosj')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 58,
                y: 4.640625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(3) div.lxn9zzn > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div/div[2]/div/div/div[2]/div[2]/span/div[3]/button/div[2]/div[2]/div[2]/div/div)'),
            targetPage.locator(':scope >>> div:nth-of-type(3) div.lxn9zzn > div > div'),
            targetPage.locator('::-p-text(Log in with phone)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 158.9140625,
                y: 17,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.Bdrsbstart\\(0\\)\\!'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/div/div[2]/div/button/div/div[2])'),
            targetPage.locator(':scope >>> div.Bdrsbstart\\(0\\)\\!'),
            targetPage.locator('::-p-text(+34)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 18.171875,
                y: 22.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Search[role=\\"textbox\\"])'),
            targetPage.locator('input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/div/div[2]/div[1]/div/input)'),
            targetPage.locator(':scope >>> input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 64.5,
                y: 17.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Search[role=\\"textbox\\"])'),
            targetPage.locator('input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/div/div[2]/div[1]/div/input)'),
            targetPage.locator(':scope >>> input')
        ])
            .setTimeout(timeout)
            .fill('es');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('CapsLock');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('A');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Search[role=\\"textbox\\"])'),
            targetPage.locator('input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/div/div[2]/div[1]/div/input)'),
            targetPage.locator(':scope >>> input')
        ])
            .setTimeout(timeout)
            .fill('SPA');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria( Spain +34 )'),
            targetPage.locator('div.H\\(255px\\)--ml button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/div/div[2]/div[2]/div/button)'),
            targetPage.locator(':scope >>> div.H\\(255px\\)--ml button'),
            targetPage.locator('::-p-text(Spain+34)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 116.5,
                y: 24.5,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Phone Number)'),
            targetPage.locator('#phone_number'),
            targetPage.locator('::-p-xpath(//*[@id=\\"phone_number\\"])'),
            targetPage.locator(':scope >>> #phone_number')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 85.34375,
                y: 27.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Phone Number)'),
            targetPage.locator('#phone_number'),
            targetPage.locator('::-p-xpath(//*[@id=\\"phone_number\\"])'),
            targetPage.locator(':scope >>> #phone_number')
        ])
            .setTimeout(timeout)
            .fill('680821181');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#o787701392 > div > div > div.Ta\\(c\\) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/div)'),
            targetPage.locator(':scope >>> #o787701392 > div > div > div.Ta\\(c\\) > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 240.5,
                y: 209.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#o787701392 div.c9iqosj'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/div/div[3]/button/div[2]/div[2])'),
            targetPage.locator(':scope >>> #o787701392 div.c9iqosj')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 188.703125,
                y: 5.5,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://idmsa.apple.com/appleauth/auth/authorize/signin?frame_id=20b3d108-7eaa-4236-8441-eb28dccb2da3&language=zh_CN&skVersion=7&iframeId=20b3d108-7eaa-4236-8441-eb28dccb2da3&client_id=d39ba9916b7251055b22c7f910e2ea796ee65e98b2ddecea8f5dde8d9d1a815d&redirect_uri=https://www.icloud.com&response_type=code&response_mode=web_message&state=20b3d108-7eaa-4236-8441-eb28dccb2da3&authVersion=latest', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('#sign_in_form'),
            targetPage.locator('::-p-xpath(//*[@id=\\"sign_in_form\\"])'),
            targetPage.locator(':scope >>> #sign_in_form')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 258,
                y: 56.5,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://idmsa.apple.com/appleauth/auth/authorize/signin?frame_id=20b3d108-7eaa-4236-8441-eb28dccb2da3&language=zh_CN&skVersion=7&iframeId=20b3d108-7eaa-4236-8441-eb28dccb2da3&client_id=d39ba9916b7251055b22c7f910e2ea796ee65e98b2ddecea8f5dde8d9d1a815d&redirect_uri=https://www.icloud.com&response_type=code&response_mode=web_message&state=20b3d108-7eaa-4236-8441-eb28dccb2da3&authVersion=latest', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(电子邮件或电话号码)'),
            targetPage.locator('#account_name_text_field'),
            targetPage.locator('::-p-xpath(//*[@id=\\"account_name_text_field\\"])'),
            targetPage.locator(':scope >>> #account_name_text_field')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 274,
                y: 45.5,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://idmsa.apple.com/appleauth/auth/authorize/signin?frame_id=20b3d108-7eaa-4236-8441-eb28dccb2da3&language=zh_CN&skVersion=7&iframeId=20b3d108-7eaa-4236-8441-eb28dccb2da3&client_id=d39ba9916b7251055b22c7f910e2ea796ee65e98b2ddecea8f5dde8d9d1a815d&redirect_uri=https://www.icloud.com&response_type=code&response_mode=web_message&state=20b3d108-7eaa-4236-8441-eb28dccb2da3&authVersion=latest', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(电子邮件或电话号码)'),
            targetPage.locator('#account_name_text_field'),
            targetPage.locator('::-p-xpath(//*[@id=\\"account_name_text_field\\"])'),
            targetPage.locator(':scope >>> #account_name_text_field')
        ])
            .setTimeout(timeout)
            .fill('samihalawaster@icloud.com');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://idmsa.apple.com/appleauth/auth/authorize/signin?frame_id=20b3d108-7eaa-4236-8441-eb28dccb2da3&language=zh_CN&skVersion=7&iframeId=20b3d108-7eaa-4236-8441-eb28dccb2da3&client_id=d39ba9916b7251055b22c7f910e2ea796ee65e98b2ddecea8f5dde8d9d1a815d&redirect_uri=https://www.icloud.com&response_type=code&response_mode=web_message&state=20b3d108-7eaa-4236-8441-eb28dccb2da3&authVersion=latest', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(密码)'),
            targetPage.locator('#password_text_field'),
            targetPage.locator('::-p-xpath(//*[@id=\\"password_text_field\\"])'),
            targetPage.locator(':scope >>> #password_text_field')
        ])
            .setTimeout(timeout)
            .fill('ChaoJiLaoWai1314');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://idmsa.apple.com/appleauth/auth/authorize/signin?frame_id=20b3d108-7eaa-4236-8441-eb28dccb2da3&language=zh_CN&skVersion=7&iframeId=20b3d108-7eaa-4236-8441-eb28dccb2da3&client_id=d39ba9916b7251055b22c7f910e2ea796ee65e98b2ddecea8f5dde8d9d1a815d&redirect_uri=https://www.icloud.com&response_type=code&response_mode=web_message&state=20b3d108-7eaa-4236-8441-eb28dccb2da3&authVersion=latest', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('#remember-me-label'),
            targetPage.locator('::-p-xpath(//*[@id=\\"remember-me-label\\"])'),
            targetPage.locator(':scope >>> #remember-me-label'),
            targetPage.locator('::-p-text(保持我的登录状态)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 134,
                y: 7,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://idmsa.apple.com/appleauth/auth/authorize/signin?frame_id=20b3d108-7eaa-4236-8441-eb28dccb2da3&language=zh_CN&skVersion=7&iframeId=20b3d108-7eaa-4236-8441-eb28dccb2da3&client_id=d39ba9916b7251055b22c7f910e2ea796ee65e98b2ddecea8f5dde8d9d1a815d&redirect_uri=https://www.icloud.com&response_type=code&response_mode=web_message&state=20b3d108-7eaa-4236-8441-eb28dccb2da3&authVersion=latest', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(电子邮件或电话号码)'),
            targetPage.locator('#account_name_text_field'),
            targetPage.locator('::-p-xpath(//*[@id=\\"account_name_text_field\\"])'),
            targetPage.locator(':scope >>> #account_name_text_field'),
            targetPage.locator('::-p-text(samihalawaster@icloud.com)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 312,
                y: 13.5,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://idmsa.apple.com/appleauth/auth/authorize/signin?frame_id=20b3d108-7eaa-4236-8441-eb28dccb2da3&language=zh_CN&skVersion=7&iframeId=20b3d108-7eaa-4236-8441-eb28dccb2da3&client_id=d39ba9916b7251055b22c7f910e2ea796ee65e98b2ddecea8f5dde8d9d1a815d&redirect_uri=https://www.icloud.com&response_type=code&response_mode=web_message&state=20b3d108-7eaa-4236-8441-eb28dccb2da3&authVersion=latest', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Shift');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://idmsa.apple.com/appleauth/auth/authorize/signin?frame_id=20b3d108-7eaa-4236-8441-eb28dccb2da3&language=zh_CN&skVersion=7&iframeId=20b3d108-7eaa-4236-8441-eb28dccb2da3&client_id=d39ba9916b7251055b22c7f910e2ea796ee65e98b2ddecea8f5dde8d9d1a815d&redirect_uri=https://www.icloud.com&response_type=code&response_mode=web_message&state=20b3d108-7eaa-4236-8441-eb28dccb2da3&authVersion=latest', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('Shift');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://idmsa.apple.com/appleauth/auth/authorize/signin?frame_id=20b3d108-7eaa-4236-8441-eb28dccb2da3&language=zh_CN&skVersion=7&iframeId=20b3d108-7eaa-4236-8441-eb28dccb2da3&client_id=d39ba9916b7251055b22c7f910e2ea796ee65e98b2ddecea8f5dde8d9d1a815d&redirect_uri=https://www.icloud.com&response_type=code&response_mode=web_message&state=20b3d108-7eaa-4236-8441-eb28dccb2da3&authVersion=latest', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(继续) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('i'),
            targetPage.locator('::-p-xpath(//*[@id=\\"sign-in\\"]/i)'),
            targetPage.locator(':scope >>> i')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 19,
                y: 8.5,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://idmsa.apple.com/appleauth/auth/authorize/signin?frame_id=20b3d108-7eaa-4236-8441-eb28dccb2da3&language=zh_CN&skVersion=7&iframeId=20b3d108-7eaa-4236-8441-eb28dccb2da3&client_id=d39ba9916b7251055b22c7f910e2ea796ee65e98b2ddecea8f5dde8d9d1a815d&redirect_uri=https://www.icloud.com&response_type=code&response_mode=web_message&state=20b3d108-7eaa-4236-8441-eb28dccb2da3&authVersion=latest', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(继续使用密码登录)'),
            targetPage.locator('#continue-password'),
            targetPage.locator('::-p-xpath(//*[@id=\\"continue-password\\"])'),
            targetPage.locator(':scope >>> #continue-password'),
            targetPage.locator('::-p-text(继续使用密码登录)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 189,
                y: 24.953125,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://idmsa.apple.com/appleauth/auth/authorize/signin?frame_id=20b3d108-7eaa-4236-8441-eb28dccb2da3&language=zh_CN&skVersion=7&iframeId=20b3d108-7eaa-4236-8441-eb28dccb2da3&client_id=d39ba9916b7251055b22c7f910e2ea796ee65e98b2ddecea8f5dde8d9d1a815d&redirect_uri=https://www.icloud.com&response_type=code&response_mode=web_message&state=20b3d108-7eaa-4236-8441-eb28dccb2da3&authVersion=latest', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(密码)'),
            targetPage.locator('#password_text_field'),
            targetPage.locator('::-p-xpath(//*[@id=\\"password_text_field\\"])'),
            targetPage.locator(':scope >>> #password_text_field'),
            targetPage.locator('::-p-text(ChaoJiLaoWai1314)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 470,
                y: 45.40625,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://idmsa.apple.com/appleauth/auth/authorize/signin?frame_id=20b3d108-7eaa-4236-8441-eb28dccb2da3&language=zh_CN&skVersion=7&iframeId=20b3d108-7eaa-4236-8441-eb28dccb2da3&client_id=d39ba9916b7251055b22c7f910e2ea796ee65e98b2ddecea8f5dde8d9d1a815d&redirect_uri=https://www.icloud.com&response_type=code&response_mode=web_message&state=20b3d108-7eaa-4236-8441-eb28dccb2da3&authVersion=latest', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(登录) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('i'),
            targetPage.locator('::-p-xpath(//*[@id=\\"sign-in\\"]/i)'),
            targetPage.locator(':scope >>> i')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 22,
                y: 17.5,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://idmsa.apple.com/appleauth/auth/authorize/signin?frame_id=20b3d108-7eaa-4236-8441-eb28dccb2da3&language=zh_CN&skVersion=7&iframeId=20b3d108-7eaa-4236-8441-eb28dccb2da3&client_id=d39ba9916b7251055b22c7f910e2ea796ee65e98b2ddecea8f5dde8d9d1a815d&redirect_uri=https://www.icloud.com&response_type=code&response_mode=web_message&state=20b3d108-7eaa-4236-8441-eb28dccb2da3&authVersion=latest', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(输入验证码 位数 1)'),
            targetPage.locator('#content input:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"stepEl\\"]/div/hsa2-sk7/div/div[2]/div[1]/div/div/input[1])'),
            targetPage.locator(':scope >>> #content input:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .fill('0');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://idmsa.apple.com/appleauth/auth/authorize/signin?frame_id=20b3d108-7eaa-4236-8441-eb28dccb2da3&language=zh_CN&skVersion=7&iframeId=20b3d108-7eaa-4236-8441-eb28dccb2da3&client_id=d39ba9916b7251055b22c7f910e2ea796ee65e98b2ddecea8f5dde8d9d1a815d&redirect_uri=https://www.icloud.com&response_type=code&response_mode=web_message&state=20b3d108-7eaa-4236-8441-eb28dccb2da3&authVersion=latest', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(位数 2)'),
            targetPage.locator('input:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"stepEl\\"]/div/hsa2-sk7/div/div[2]/div[1]/div/div/input[2])'),
            targetPage.locator(':scope >>> input:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .fill('6');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://idmsa.apple.com/appleauth/auth/authorize/signin?frame_id=20b3d108-7eaa-4236-8441-eb28dccb2da3&language=zh_CN&skVersion=7&iframeId=20b3d108-7eaa-4236-8441-eb28dccb2da3&client_id=d39ba9916b7251055b22c7f910e2ea796ee65e98b2ddecea8f5dde8d9d1a815d&redirect_uri=https://www.icloud.com&response_type=code&response_mode=web_message&state=20b3d108-7eaa-4236-8441-eb28dccb2da3&authVersion=latest', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(位数 3)'),
            targetPage.locator('input:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"stepEl\\"]/div/hsa2-sk7/div/div[2]/div[1]/div/div/input[3])'),
            targetPage.locator(':scope >>> input:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .fill('8');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://idmsa.apple.com/appleauth/auth/authorize/signin?frame_id=20b3d108-7eaa-4236-8441-eb28dccb2da3&language=zh_CN&skVersion=7&iframeId=20b3d108-7eaa-4236-8441-eb28dccb2da3&client_id=d39ba9916b7251055b22c7f910e2ea796ee65e98b2ddecea8f5dde8d9d1a815d&redirect_uri=https://www.icloud.com&response_type=code&response_mode=web_message&state=20b3d108-7eaa-4236-8441-eb28dccb2da3&authVersion=latest', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(位数 4)'),
            targetPage.locator('input:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"stepEl\\"]/div/hsa2-sk7/div/div[2]/div[1]/div/div/input[4])'),
            targetPage.locator(':scope >>> input:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .fill('0');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://idmsa.apple.com/appleauth/auth/authorize/signin?frame_id=20b3d108-7eaa-4236-8441-eb28dccb2da3&language=zh_CN&skVersion=7&iframeId=20b3d108-7eaa-4236-8441-eb28dccb2da3&client_id=d39ba9916b7251055b22c7f910e2ea796ee65e98b2ddecea8f5dde8d9d1a815d&redirect_uri=https://www.icloud.com&response_type=code&response_mode=web_message&state=20b3d108-7eaa-4236-8441-eb28dccb2da3&authVersion=latest', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(位数 5)'),
            targetPage.locator('input:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"stepEl\\"]/div/hsa2-sk7/div/div[2]/div[1]/div/div/input[5])'),
            targetPage.locator(':scope >>> input:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .fill('9');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://idmsa.apple.com/appleauth/auth/authorize/signin?frame_id=20b3d108-7eaa-4236-8441-eb28dccb2da3&language=zh_CN&skVersion=7&iframeId=20b3d108-7eaa-4236-8441-eb28dccb2da3&client_id=d39ba9916b7251055b22c7f910e2ea796ee65e98b2ddecea8f5dde8d9d1a815d&redirect_uri=https://www.icloud.com&response_type=code&response_mode=web_message&state=20b3d108-7eaa-4236-8441-eb28dccb2da3&authVersion=latest', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(位数 6)'),
            targetPage.locator('input:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"stepEl\\"]/div/hsa2-sk7/div/div[2]/div[1]/div/div/input[6])'),
            targetPage.locator(':scope >>> input:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .fill('7');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://idmsa.apple.com/appleauth/auth/authorize/signin?frame_id=20b3d108-7eaa-4236-8441-eb28dccb2da3&language=zh_CN&skVersion=7&iframeId=20b3d108-7eaa-4236-8441-eb28dccb2da3&client_id=d39ba9916b7251055b22c7f910e2ea796ee65e98b2ddecea8f5dde8d9d1a815d&redirect_uri=https://www.icloud.com&response_type=code&response_mode=web_message&state=20b3d108-7eaa-4236-8441-eb28dccb2da3&authVersion=latest', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(信任)'),
            targetPage.locator('button:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"stepEl\\"]/div/hsa2-sk7/div/div[2]/fieldset/div/div[2]/button[2])'),
            targetPage.locator(':scope >>> button:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 25,
                y: 17.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(OTP code digit 1)'),
            targetPage.locator('div.D\\(f\\) > div:nth-of-type(1) input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/div[2]/div[3]/div[1]/div[1]/div[2]/input)'),
            targetPage.locator(':scope >>> div.D\\(f\\) > div:nth-of-type(1) input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 38.6484375,
                y: 24.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(OTP code digit 1)'),
            targetPage.locator('div.D\\(f\\) > div:nth-of-type(1) input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/div[2]/div[3]/div[1]/div[1]/div[2]/input)'),
            targetPage.locator(':scope >>> div.D\\(f\\) > div:nth-of-type(1) input')
        ])
            .setTimeout(timeout)
            .fill('450972');
    }
    {
        const targetPage = page;
        await targetPage.goto('https://mail.google.com/mail/u/0/');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://mail.google.com/mail/u/0/', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Google Account: Sami Halawa \\(samihalawaster@gmail.com\\))'),
            targetPage.locator('div.gb_z a'),
            targetPage.locator('::-p-xpath(//*[@id=\\"gb\\"]/div[2]/div[3]/div[1]/div[2]/div/a)'),
            targetPage.locator(':scope >>> div.gb_z a')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 3,
                y: 1,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://mail.google.com/mail/u/0/', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[3];
        await puppeteer.Locator.race([
            frame.locator('span:nth-of-type(3) span.LzIwWe > div'),
            frame.locator('::-p-xpath(//*[@id=\\"yDmH0d\\"]/c-wiz/div/div/div/div/div[2]/div/div[3]/div[2]/span[3]/a/span[2]/div)'),
            frame.locator(':scope >>> span:nth-of-type(3) span.LzIwWe > div'),
            frame.locator('::-p-text(Cheng Gongchenggon2649@gmail.com)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 217,
                y: 20,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://mail.google.com/mail/u/3/', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('#\\:2m'),
            targetPage.locator('::-p-xpath(//*[@id=\\":2m\\"])'),
            targetPage.locator(':scope >>> #\\:2m')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 135.734375,
                y: 12,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://mail.google.com/mail/u/3/', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(YOUR CODE IS 697645)'),
            targetPage.locator('div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(1) div.gs > div:nth-of-type(3) tr:nth-of-type(2) tr:nth-of-type(1) > td'),
            targetPage.locator('::-p-xpath(//*[@id=\\":n3\\"]/div[1]/center/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr[2]/td/table/tbody/tr[1]/td)'),
            targetPage.locator(':scope >>> div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(1) div.gs > div:nth-of-type(3) tr:nth-of-type(2) tr:nth-of-type(1) > td')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 397,
                y: 17.9140625,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://mail.google.com/mail/u/3/', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Meta');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://mail.google.com/mail/u/3/', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('c');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://mail.google.com/mail/u/3/', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.goto('https://mail.google.com/mail/u/3/#inbox/FMfcgzQbgJRsLDgKDjdLsJrdnwczrCxD');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(YOUR CODE IS 843375) >>>> ::-p-aria([role=\\"strong\\"])'),
            targetPage.locator('strong'),
            targetPage.locator('::-p-xpath(//*[@id=\\":20\\"]/div[1]/center/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr[2]/td/table/tbody/tr[1]/td/strong)'),
            targetPage.locator(':scope >>> strong'),
            targetPage.locator('::-p-text(YOUR CODE IS 843375)')
        ])
            .setTimeout(timeout)
            .click({
              delay: 680.3999999985099,
              offset: {
                x: 368.5,
                y: 27.4140625,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('c');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.goto('https://tinder.com/');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.Fxs\\(0\\) > div:nth-of-type(2) div.c9iqosj > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/main/div[1]/div/div/div/div/div/header/div/div[2]/div[2]/a/div[2]/div[2]/div)'),
            targetPage.locator(':scope >>> div.Fxs\\(0\\) > div:nth-of-type(2) div.c9iqosj > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 3.1015625,
                y: 21.640625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(手机号码)'),
            targetPage.locator('#phone_number'),
            targetPage.locator('::-p-xpath(//*[@id=\\"phone_number\\"])'),
            targetPage.locator(':scope >>> #phone_number')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 158.34375,
                y: 26.5,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(手机号码)'),
            targetPage.locator('#phone_number'),
            targetPage.locator('::-p-xpath(//*[@id=\\"phone_number\\"])'),
            targetPage.locator(':scope >>> #phone_number')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 82.34375,
                y: 21.5,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(手机号码)'),
            targetPage.locator('#phone_number'),
            targetPage.locator('::-p-xpath(//*[@id=\\"phone_number\\"])'),
            targetPage.locator(':scope >>> #phone_number')
        ])
            .setTimeout(timeout)
            .fill('680821181');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#o787701392 div.c9iqosj'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/div/div[3]/button/div[2]/div[2])'),
            targetPage.locator(':scope >>> #o787701392 div.c9iqosj')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 172.703125,
                y: 43.5,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://mail.google.com/mail/u/3/', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('div.ain div.aio'),
            targetPage.locator('::-p-xpath(//*[@id=\\":ln\\"]/div/div[2])'),
            targetPage.locator(':scope >>> div.ain div.aio'),
            targetPage.locator('::-p-text(Recibidos116)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 70,
                y: 2,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://mail.google.com/mail/u/3/', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(一次性密码数字 1)'),
            targetPage.locator('div.D\\(f\\) > div:nth-of-type(1) input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/div[2]/div[3]/div[1]/div[1]/div[2]/input)'),
            targetPage.locator(':scope >>> div.D\\(f\\) > div:nth-of-type(1) input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 22.6484375,
                y: 16.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(一次性密码数字 1)'),
            targetPage.locator('div.D\\(f\\) > div:nth-of-type(1) input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/div[2]/div[3]/div[1]/div[1]/div[2]/input)'),
            targetPage.locator(':scope >>> div.D\\(f\\) > div:nth-of-type(1) input')
        ])
            .setTimeout(timeout)
            .fill('804353');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator("[data-testid='allow'] div.c9iqosj"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"allow\\"]/div[2]/div[2])'),
            targetPage.locator(":scope >>> [data-testid='allow'] div.c9iqosj")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 220.5,
                y: 14.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator("[data-testid='decline'] div.c9iqosj > div"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"decline\\"]/div[2]/div[2]/div)'),
            targetPage.locator(":scope >>> [data-testid='decline'] div.c9iqosj > div"),
            targetPage.locator('::-p-text(算了)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 14.6015625,
                y: 8.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.W\\(a\\) > div:nth-of-type(2) div.c9iqosj'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div/div[3]/div[2]/button/div[2]/div[2])'),
            targetPage.locator(':scope >>> div.W\\(a\\) > div:nth-of-type(2) div.c9iqosj')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 103.703125,
                y: 19,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(1 of 9) >>>> ::-p-aria(个人资料照片 1)'),
            targetPage.locator('div.Wc\\(\\$transform\\) section div:nth-of-type(1) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"carousel-item-0\\"]/div)'),
            targetPage.locator(':scope >>> div.Wc\\(\\$transform\\) section div:nth-of-type(1) > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 374,
                y: 308,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(个人资料照片 2)'),
            targetPage.locator('#\\:rd\\: > div:nth-of-type(2) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"carousel-item-1\\"]/div)'),
            targetPage.locator(':scope >>> #\\:rd\\: > div:nth-of-type(2) > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 374,
                y: 308,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(个人资料照片 3)'),
            targetPage.locator('div.Wc\\(\\$transform\\) > div:nth-of-type(1) div:nth-of-type(3) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"carousel-item-2\\"]/div)'),
            targetPage.locator(':scope >>> div.Wc\\(\\$transform\\) > div:nth-of-type(1) div:nth-of-type(3) > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 374,
                y: 308,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.B\\(0\\) > div > div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[4]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div.B\\(0\\) > div > div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 23.33282470703125,
                y: 62.4000244140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 30.97283935546875,
                y: 9.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('button.D\\(b\\) div.c9iqosj > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/button[2]/div[2]/div[2]/div)'),
            targetPage.locator(':scope >>> button.D\\(b\\) div.c9iqosj > div'),
            targetPage.locator('::-p-text(不，谢谢)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 59.703125,
                y: 17,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 15.9727783203125,
                y: 2.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 15.9727783203125,
                y: 2.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 15.9727783203125,
                y: 2.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('button.Mx\\(a\\) div.c9iqosj > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/button[2]/div[2]/div[2]/div)'),
            targetPage.locator(':scope >>> button.Mx\\(a\\) div.c9iqosj > div'),
            targetPage.locator('::-p-text(不感兴趣)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 70.703125,
                y: 11.25,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.9727783203125,
                y: 0.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.9727783203125,
                y: 0.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.9727783203125,
                y: 0.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.9727783203125,
                y: 0.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.9727783203125,
                y: 0.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.9727783203125,
                y: 0.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.9727783203125,
                y: 0.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.9727783203125,
                y: 0.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.9727783203125,
                y: 0.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.9727783203125,
                y: 0.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.9727783203125,
                y: 0.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.9727783203125,
                y: 0.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 15.9727783203125,
                y: 3.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 15.9727783203125,
                y: 3.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 15.9727783203125,
                y: 3.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 15.9727783203125,
                y: 3.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(2) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[2]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(2) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 12.99432373046875,
                y: 8.27984619140625,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 28.9727783203125,
                y: 19.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(消息)'),
            targetPage.locator('#o775463182'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o775463182\\"])'),
            targetPage.locator(':scope >>> #o775463182')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 26.796875,
                y: 6,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('button.Mb\\(24px\\) div.c9iqosj'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[3]/button[1]/div[2]/div[2])'),
            targetPage.locator(':scope >>> button.Mb\\(24px\\) div.c9iqosj')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 149.8984375,
                y: 16.875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(配对)'),
            targetPage.locator('#o609274768'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o609274768\\"])'),
            targetPage.locator(':scope >>> #o609274768')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 20,
                y: 3,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#o1863285868 div > div.Pos\\(r\\) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"likes-you\\"]/div/div[1]/div)'),
            targetPage.locator(':scope >>> #o1863285868 div > div.Pos\\(r\\) > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 45.849220275878906,
                y: 53.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(关闭) >>>> ::-p-aria([role=\\"image\\"])'),
            targetPage.locator('div.Ovy\\(h\\) > div.Pos\\(a\\) svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1448513627\\"]/div/div/div[2]/div[3]/button/svg)'),
            targetPage.locator(':scope >>> div.Ovy\\(h\\) > div.Pos\\(a\\) svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 3.5,
                y: 15,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Jacqueline)'),
            targetPage.locator('span > div'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"likesYouCard\\"]/span/div)'),
            targetPage.locator(':scope >>> span > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 186.5,
                y: 210,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[2]/div[2]/div/div[2]/div/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 36.33282470703125,
                y: 18.20001220703125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(消息)'),
            targetPage.locator('#o775463182'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o775463182\\"])'),
            targetPage.locator(':scope >>> #o775463182')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 32.796875,
                y: 4,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(个人资料照片)'),
            targetPage.locator('a > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/a/div/div)'),
            targetPage.locator(':scope >>> a > div > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 20,
                y: 6.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(3) button:nth-of-type(4) > span > span > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div/div[3]/div[2]/button[4]/span/span/span)'),
            targetPage.locator(':scope >>> div:nth-of-type(3) button:nth-of-type(4) > span > span > span'),
            targetPage.locator('::-p-text(添加语言选择)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 284,
                y: 21.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(81) > span > span > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div/div[2]/div/div[1]/div[81]/span/span/span)'),
            targetPage.locator(':scope >>> div:nth-of-type(81) > span > span > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 199,
                y: 23.6015625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('aside div.c9iqosj'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div/div[3]/a/div[2]/div[2])'),
            targetPage.locator(':scope >>> aside div.c9iqosj')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 175.75,
                y: 24.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span:nth-of-type(1) div.wlw120x > div > div:nth-of-type(2) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div/div[4]/div[1]/span[1]/div/div/div[2]/div/div[2]/div)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span:nth-of-type(1) div.wlw120x > div > div:nth-of-type(2) > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 3,
                y: 17,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(最大距离（单位：公里）)'),
            targetPage.locator("[data-testid='distance-handle']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"distance-handle\\"])'),
            targetPage.locator(":scope >>> [data-testid='distance-handle']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 1.4375,
                y: 15,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator("div:nth-of-type(4) span:nth-of-type(2) [data-testid='toggle-switch-input']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"toggle-switch-input\\"])'),
            targetPage.locator(":scope >>> div:nth-of-type(4) span:nth-of-type(2) [data-testid='toggle-switch-input']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 29,
                y: 19,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) button > span > span > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div/div[4]/div[1]/button/span/span/span)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) button > span > span > span'),
            targetPage.locator('::-p-text(感兴趣的是女)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 284,
                y: 0.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(2) > label'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div/div/div[2]/ul/li[2]/label)'),
            targetPage.locator(':scope >>> li:nth-of-type(2) > label')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 227,
                y: 2,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('aside div > div > div > div > div > div > div > div:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div/div/div[1])'),
            targetPage.locator(':scope >>> aside div > div > div > div > div > div > div > div:nth-of-type(1)'),
            targetPage.locator('::-p-text(请选择所有适用选项，收获更多想要结识的人。)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 90,
                y: 28,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(3) div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div/div/div[2]/ul/li[3]/label/div/div)'),
            targetPage.locator(':scope >>> li:nth-of-type(3) div > div'),
            targetPage.locator('::-p-text(二元性别以外)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 173,
                y: 2,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(2) div.Flxg\\(1\\) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div/div/div[2]/ul/li[2]/label/div[1]/div)'),
            targetPage.locator(':scope >>> li:nth-of-type(2) div.Flxg\\(1\\) > div'),
            targetPage.locator('::-p-text(女)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 182,
                y: 5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(3) div.Flxg\\(1\\) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div/div/div[2]/ul/li[3]/label/div[1]/div)'),
            targetPage.locator(':scope >>> li:nth-of-type(3) div.Flxg\\(1\\) > div'),
            targetPage.locator('::-p-text(二元性别以外)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 184,
                y: 2,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(2) > label'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div/div/div[2]/ul/li[2]/label)'),
            targetPage.locator(':scope >>> li:nth-of-type(2) > label')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 208,
                y: 2,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(3) > label'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div/div/div[2]/ul/li[3]/label)'),
            targetPage.locator(':scope >>> li:nth-of-type(3) > label')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 205,
                y: 8,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#main-content > div.H\\(100\\%\\) > div > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div)'),
            targetPage.locator(':scope >>> #main-content > div.H\\(100\\%\\) > div > div > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 27,
                y: 135,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('nav.NetHeight\\(100\\%\\,--side-nav-bar-height\\) > div > div > div > div > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div)'),
            targetPage.locator(':scope >>> nav.NetHeight\\(100\\%\\,--side-nav-bar-height\\) > div > div > div > div > div > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 225,
                y: 502,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.c9iqosj > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[2]/a/div[2]/div[2]/div)'),
            targetPage.locator(':scope >>> div.c9iqosj > div'),
            targetPage.locator('::-p-text(编辑信息\\(11% 已完成\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 38.03125,
                y: 0,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(5) span:nth-of-type(2) > div > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div/div[5]/div/span[2]/div/span)'),
            targetPage.locator(':scope >>> div:nth-of-type(5) span:nth-of-type(2) > div > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 278,
                y: 4,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('span:nth-of-type(3) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div/div[4]/div[1]/span[3]/div)'),
            targetPage.locator(':scope >>> span:nth-of-type(3) > div'),
            targetPage.locator('::-p-text(年龄偏好18 - 42最小年龄最大年龄)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 0,
                y: 39,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(探索)'),
            targetPage.locator('nav.D\\(f\\) > div > a'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/div/a)'),
            targetPage.locator(':scope >>> nav.D\\(f\\) > div > a')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 30,
                y: 11.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#catalog-page > section:nth-of-type(1) button:nth-of-type(1) div.StretchedBox'),
            targetPage.locator('::-p-xpath(//*[@id=\\"catalog-page\\"]/section[1]/section/div/button[1]/div/div/div[1])'),
            targetPage.locator(':scope >>> #catalog-page > section:nth-of-type(1) button:nth-of-type(1) div.StretchedBox')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 86,
                y: 82,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 8.97283935546875,
                y: 5.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#catalog-page > section:nth-of-type(1) button:nth-of-type(2) div.StretchedBox'),
            targetPage.locator('::-p-xpath(//*[@id=\\"catalog-page\\"]/section[1]/section/div/button[2]/div/div/div[1])'),
            targetPage.locator(':scope >>> #catalog-page > section:nth-of-type(1) button:nth-of-type(2) div.StretchedBox')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 57.5,
                y: 118,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('button.W\\(100\\%\\) div.c9iqosj'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div/div[2]/button[1]/div[2]/div[2])'),
            targetPage.locator(':scope >>> button.W\\(100\\%\\) div.c9iqosj')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 203.5,
                y: 40.25,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 51.33282470703125,
                y: 22.4000244140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 51.33282470703125,
                y: 22.4000244140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('nav.D\\(f\\) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/div)'),
            targetPage.locator(':scope >>> nav.D\\(f\\) > div'),
            targetPage.locator('::-p-text(Boost1探索工作模式安全工具包)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 169,
                y: 12.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(安全工具包) >>>> ::-p-aria([role=\\"graphics-symbol\\"])'),
            targetPage.locator('button.C\\(\\$c-ds-icon-trust\\)\\:h path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/div/button[2]/svg/g/path)'),
            targetPage.locator(':scope >>> button.C\\(\\$c-ds-icon-trust\\)\\:h path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 1.000274658203125,
                y: 8.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#o787701392 > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div)'),
            targetPage.locator(':scope >>> #o787701392 > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 315,
                y: 101,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('nav.D\\(f\\) > div > div button > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/div/div/div/div/div/div/div/button/span)'),
            targetPage.locator(':scope >>> nav.D\\(f\\) > div > div button > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 17,
                y: 2.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#o787701392 > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div)'),
            targetPage.locator(':scope >>> #o787701392 > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 291,
                y: 130,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(个人资料照片)'),
            targetPage.locator('a > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/a/div/div)'),
            targetPage.locator(':scope >>> a > div > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 27,
                y: 8.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.c9iqosj'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[2]/a/div[2]/div[2])'),
            targetPage.locator(':scope >>> div.c9iqosj')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 144.03125,
                y: 5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(预览)'),
            targetPage.locator('#\\:r41\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r41:\\"])'),
            targetPage.locator(':scope >>> #\\:r41\\:'),
            targetPage.locator('::-p-text(预览)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 104.5,
                y: 25,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(编辑)'),
            targetPage.locator('#\\:r40\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r40:\\"])'),
            targetPage.locator(':scope >>> #\\:r40\\:'),
            targetPage.locator('::-p-text(编辑)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 137,
                y: 39,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(3) path'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r42:\\"]/section[1]/div[1]/ul/li[3]/div/button/div[1]/div[2]/div/svg/path)'),
            targetPage.locator(':scope >>> li:nth-of-type(3) path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 7.0078125,
                y: 2.078125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#o787701392 div.D\\(f\\) > div:nth-of-type(1) > div div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/div[2]/div[1]/div/button/div)'),
            targetPage.locator(':scope >>> #o787701392 div.D\\(f\\) > div:nth-of-type(1) > div div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 268.5,
                y: 75.640625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#o787701392 input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/div[2]/div[1]/div/button/input)'),
            targetPage.locator(':scope >>> #o787701392 input'),
            targetPage.locator('::-p-text(C:\\fakepath\\sami-bueno.jpeg)')
        ])
            .setTimeout(timeout)
            .fill('C:\\fakepath\\sami-bueno.jpeg');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#o787701392 button:nth-of-type(1) div.c9iqosj > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/div[3]/button[1]/div[2]/div[2]/div)'),
            targetPage.locator(':scope >>> #o787701392 button:nth-of-type(1) div.c9iqosj > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 27.6015625,
                y: 15,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Control');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Control');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(关于 ABEL \\(限制 500 个字符以内\\)[role=\\"textbox\\"])'),
            targetPage.locator('#\\:r4l\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r4l:\\"])'),
            targetPage.locator(':scope >>> #\\:r4l\\:')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 172,
                y: 20.2265625,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(关于 ABEL \\(限制 500 个字符以内\\)[role=\\"textbox\\"])'),
            targetPage.locator('#\\:r4l\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r4l:\\"])'),
            targetPage.locator(':scope >>> #\\:r4l\\:')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 113,
                y: 32.2265625,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Control');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Control');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(关于 ABEL \\(限制 500 个字符以内\\)[role=\\"textbox\\"])'),
            targetPage.locator('#\\:r4l\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r4l:\\"])'),
            targetPage.locator(':scope >>> #\\:r4l\\:')
        ])
            .setTimeout(timeout)
            .fill('Madrid... ¿Hay alguien interesante?  (29 años. 186cm. Emprendedor)');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('section:nth-of-type(4) > a div > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r42:\\"]/section[4]/a/span/div/span)'),
            targetPage.locator(':scope >>> section:nth-of-type(4) > a div > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 300,
                y: 12.2265625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(家庭派对)'),
            targetPage.locator('#main-content div:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[2]/fieldset/div[7])'),
            targetPage.locator(':scope >>> #main-content div:nth-of-type(7)'),
            targetPage.locator('::-p-text(家庭派对)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 70,
                y: 17,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(电影)'),
            targetPage.locator('div:nth-of-type(29)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[2]/fieldset/div[29])'),
            targetPage.locator(':scope >>> div:nth-of-type(29)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 24,
                y: 8,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(旅行)'),
            targetPage.locator('div:nth-of-type(27)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[2]/fieldset/div[27])'),
            targetPage.locator(':scope >>> div:nth-of-type(27)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 51,
                y: 9,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(完成)'),
            targetPage.locator('#main-content button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[1]/button)'),
            targetPage.locator(':scope >>> #main-content button'),
            targetPage.locator('::-p-text(完成)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 30.203125,
                y: 24,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#\\38 ac39029-c889-43c2-87e4-d8521e7ab543'),
            targetPage.locator('::-p-xpath(//*[@id=\\"8ac39029-c889-43c2-87e4-d8521e7ab543\\"])'),
            targetPage.locator(':scope >>> #\\38 ac39029-c889-43c2-87e4-d8521e7ab543')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 31.203125,
                y: 0.2265625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(厘米[role=\\"spinbutton\\"])'),
            targetPage.locator('div.Fx\\(\\$flx1\\) > div.CenterAlign input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[4]/div[2]/div/div[2]/div[2]/div/div/div[2]/input)'),
            targetPage.locator(':scope >>> div.Fx\\(\\$flx1\\) > div.CenterAlign input')
        ])
            .setTimeout(timeout)
            .fill('186');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.StretchedBox div.c9iqosj > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[4]/div[2]/div/div[2]/button/div[2]/div[2]/div)'),
            targetPage.locator(':scope >>> div.StretchedBox div.c9iqosj > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 21.203125,
                y: 14,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(我会的语言[role=\\"region\\"]) >>>> ::-p-aria(添加语言)'),
            targetPage.locator('section:nth-of-type(8) > span > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r58:\\"]/section[8]/span/span)'),
            targetPage.locator(':scope >>> section:nth-of-type(8) > span > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 352,
                y: 6.2265625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(粤语)'),
            targetPage.locator('#main-content div:nth-of-type(19)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"section-de_37\\"]/div[19])'),
            targetPage.locator(':scope >>> #main-content div:nth-of-type(19)'),
            targetPage.locator('::-p-text(粤语)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 31,
                y: 6.296875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(中文)'),
            targetPage.locator('div:nth-of-type(81)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"section-de_37\\"]/div[81])'),
            targetPage.locator(':scope >>> div:nth-of-type(81)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 49,
                y: 21.296875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(搜索语言)'),
            targetPage.locator('div.StretchedBox input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[4]/div[2]/div/div[2]/div[2]/div[2]/input)'),
            targetPage.locator(':scope >>> div.StretchedBox input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 145,
                y: 23.296875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(搜索语言)'),
            targetPage.locator('div.StretchedBox input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[4]/div[2]/div/div[2]/div[2]/div[2]/input)'),
            targetPage.locator(':scope >>> div.StretchedBox input')
        ])
            .setTimeout(timeout)
            .fill('xi');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('CapsLock');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('CapsLock');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('a');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(搜索语言)'),
            targetPage.locator('div.StretchedBox input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[4]/div[2]/div/div[2]/div[2]/div[2]/input)'),
            targetPage.locator(':scope >>> div.StretchedBox input')
        ])
            .setTimeout(timeout)
            .fill('西');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(西班牙语)'),
            targetPage.locator('#main-content div:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"section-de_37\\"]/div[5])'),
            targetPage.locator(':scope >>> #main-content div:nth-of-type(5)'),
            targetPage.locator('::-p-text(西班牙语)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 56,
                y: 13.296875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#main-content div.W\\(100\\%\\) > div.W\\(100\\%\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[4]/div[2]/div/div[2]/div[2]/div[2])'),
            targetPage.locator(':scope >>> #main-content div.W\\(100\\%\\) > div.W\\(100\\%\\)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 130,
                y: 34.296875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(搜索语言)'),
            targetPage.locator('div.StretchedBox input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[4]/div[2]/div/div[2]/div[2]/div[2]/input)'),
            targetPage.locator(':scope >>> div.StretchedBox input')
        ])
            .setTimeout(timeout)
            .click({
              count: 2,
              offset: {
                x: 99,
                y: 12.296875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(搜索语言)'),
            targetPage.locator('div.StretchedBox input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[4]/div[2]/div/div[2]/div[2]/div[2]/input)'),
            targetPage.locator(':scope >>> div.StretchedBox input')
        ])
            .setTimeout(timeout)
            .fill('英');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(英语)'),
            targetPage.locator('#section-de_37 > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"section-de_37\\"]/div)'),
            targetPage.locator(':scope >>> #section-de_37 > div'),
            targetPage.locator('::-p-text(英语)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 24,
                y: 21.296875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.StretchedBox div.c9iqosj > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[4]/div[2]/div/div[2]/button/div[2]/div[2]/div)'),
            targetPage.locator(':scope >>> div.StretchedBox div.c9iqosj > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 19.203125,
                y: 16.296875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(添加 人格类型 信息)'),
            targetPage.locator('section:nth-of-type(9) > span:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r58:\\"]/section[9]/span[5]/span)'),
            targetPage.locator(':scope >>> section:nth-of-type(9) > span:nth-of-type(5) > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 355,
                y: 28.2265625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(最好当面)'),
            targetPage.locator('#section-de_2 > div:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"section-de_2\\"]/div[5])'),
            targetPage.locator(':scope >>> #section-de_2 > div:nth-of-type(5)'),
            targetPage.locator('::-p-text(最好当面)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 76,
                y: 9.796875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(礼物)'),
            targetPage.locator('#section-de_35 > div:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"section-de_35\\"]/div[2])'),
            targetPage.locator(':scope >>> #section-de_35 > div:nth-of-type(2)'),
            targetPage.locator('::-p-text(礼物)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 32,
                y: 16.796875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(双子座)'),
            targetPage.locator('#section-de_1 > div:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"section-de_1\\"]/div[6])'),
            targetPage.locator(':scope >>> #section-de_1 > div:nth-of-type(6)'),
            targetPage.locator('::-p-text(双子座)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 46,
                y: 0.296875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.StretchedBox div.c9iqosj > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[4]/div[2]/div/div[2]/button/div[2]/div[2]/div)'),
            targetPage.locator(':scope >>> div.StretchedBox div.c9iqosj > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 23.203125,
                y: 1.296875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(添加职位)'),
            targetPage.locator('#job_title'),
            targetPage.locator('::-p-xpath(//*[@id=\\"job_title\\"])'),
            targetPage.locator(':scope >>> #job_title')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 233,
                y: 35.7265625,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(添加职位)'),
            targetPage.locator('#job_title'),
            targetPage.locator('::-p-xpath(//*[@id=\\"job_title\\"])'),
            targetPage.locator(':scope >>> #job_title')
        ])
            .setTimeout(timeout)
            .fill('E');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('e');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(添加职位)'),
            targetPage.locator('#job_title'),
            targetPage.locator('::-p-xpath(//*[@id=\\"job_title\\"])'),
            targetPage.locator(':scope >>> #job_title')
        ])
            .setTimeout(timeout)
            .fill('Emprendedor');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(添加公司)'),
            targetPage.locator('#company'),
            targetPage.locator('::-p-xpath(//*[@id=\\"company\\"])'),
            targetPage.locator(':scope >>> #company')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 167,
                y: 6.7265625,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(添加公司)'),
            targetPage.locator('#company'),
            targetPage.locator('::-p-xpath(//*[@id=\\"company\\"])'),
            targetPage.locator(':scope >>> #company')
        ])
            .setTimeout(timeout)
            .fill('S');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('s');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(添加公司)'),
            targetPage.locator('#company'),
            targetPage.locator('::-p-xpath(//*[@id=\\"company\\"])'),
            targetPage.locator(':scope >>> #company')
        ])
            .setTimeout(timeout)
            .fill('Shenzhen TV');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('section:nth-of-type(13) > a div > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r58:\\"]/section[13]/a/span/div/span)'),
            targetPage.locator(':scope >>> section:nth-of-type(13) > a div > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 191,
                y: 16.2265625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(学校名称)'),
            targetPage.locator('#\\:r5p\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r5p:\\"])'),
            targetPage.locator(':scope >>> #\\:r5p\\:')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 108,
                y: 10.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(学校名称)'),
            targetPage.locator('#\\:r5p\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r5p:\\"])'),
            targetPage.locator(':scope >>> #\\:r5p\\:')
        ])
            .setTimeout(timeout)
            .fill('hao');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('a');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(学校名称)'),
            targetPage.locator('#\\:r5p\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r5p:\\"])'),
            targetPage.locator(':scope >>> #\\:r5p\\:')
        ])
            .setTimeout(timeout)
            .fill('lipochun');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('a');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(学校名称)'),
            targetPage.locator('#\\:r5p\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r5p:\\"])'),
            targetPage.locator(':scope >>> #\\:r5p\\:')
        ])
            .setTimeout(timeout)
            .fill('hong kong');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(香港大学)'),
            targetPage.locator('li:nth-of-type(3) > button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[2]/ul/li[3]/button)'),
            targetPage.locator(':scope >>> li:nth-of-type(3) > button'),
            targetPage.locator('::-p-text(香港大学)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 176,
                y: 14,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('section:nth-of-type(14) > a div'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r5s:\\"]/section[14]/a/span/div)'),
            targetPage.locator(':scope >>> section:nth-of-type(14) > a div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 261,
                y: 5.2265625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(搜索城市)'),
            targetPage.locator('#\\:r6d\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r6d:\\"])'),
            targetPage.locator(':scope >>> #\\:r6d\\:')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 138,
                y: 15.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(搜索城市)'),
            targetPage.locator('#\\:r6d\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r6d:\\"])'),
            targetPage.locator(':scope >>> #\\:r6d\\:')
        ])
            .setTimeout(timeout)
            .fill('m');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Madrid)'),
            targetPage.locator('li:nth-of-type(1) > button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[2]/ul/li[1]/button)'),
            targetPage.locator(':scope >>> li:nth-of-type(1) > button'),
            targetPage.locator('::-p-text(Madrid)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 157,
                y: 33,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(单一伴侣关系)'),
            targetPage.locator('#section-de_38 > div:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"section-de_38\\"]/div[1])'),
            targetPage.locator(':scope >>> #section-de_38 > div:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 95,
                y: 26.296875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.StretchedBox div.c9iqosj > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[4]/div[2]/div/div[2]/button/div[2]/div[2]/div)'),
            targetPage.locator(':scope >>> div.StretchedBox div.c9iqosj > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 23.203125,
                y: 18.296875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(添加 教育情况 信息)'),
            targetPage.locator('section:nth-of-type(9) > span:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r6g:\\"]/section[9]/span[2]/span)'),
            targetPage.locator(':scope >>> section:nth-of-type(9) > span:nth-of-type(2) > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 359,
                y: 29.2265625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(读研/读博中)'),
            targetPage.locator('#section-de_9 > div:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"section-de_9\\"]/div[5])'),
            targetPage.locator(':scope >>> #section-de_9 > div:nth-of-type(5)'),
            targetPage.locator('::-p-text(读研/读博中)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 94,
                y: 26.296875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(还不确定)'),
            targetPage.locator('#section-de_33 > div:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"section-de_33\\"]/div[5])'),
            targetPage.locator(':scope >>> #section-de_33 > div:nth-of-type(5)'),
            targetPage.locator('::-p-text(还不确定)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 46,
                y: 15.296875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.StretchedBox div.c9iqosj > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[4]/div[2]/div/div[2]/button/div[2]/div[2]/div)'),
            targetPage.locator(':scope >>> div.StretchedBox div.c9iqosj > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 21.203125,
                y: 18.296875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(2) path'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r6g:\\"]/section[1]/div[1]/ul/li[2]/div/span/div/div[2]/button/span/svg/path)'),
            targetPage.locator(':scope >>> li:nth-of-type(2) path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 5.3385009765625,
                y: 3.07830810546875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(删除)'),
            targetPage.locator('div.Mb\\(10px\\) button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div/div[1]/div/button)'),
            targetPage.locator(':scope >>> div.Mb\\(10px\\) button')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 275.5,
                y: 10.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(选择一项¨关于我¨[role=\\"heading\\"])'),
            targetPage.locator('div.Mt\\(-16px\\) h2'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r6g:\\"]/section[3]/div[2]/div/div/h2)'),
            targetPage.locator(':scope >>> div.Mt\\(-16px\\) h2')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 301,
                y: 10.2265625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(关于我的一个惊人事实是…)'),
            targetPage.locator('li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[2]/ul/li[6])'),
            targetPage.locator(':scope >>> li:nth-of-type(6)'),
            targetPage.locator('::-p-text(关于我的一个惊人事实是…)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 187,
                y: 23.109375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(文本输入框)'),
            targetPage.locator('#o-1778884828 textarea'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[3]/textarea)'),
            targetPage.locator(':scope >>> #o-1778884828 textarea')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 216,
                y: 92.109375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(文本输入框)'),
            targetPage.locator('#o-1778884828 textarea'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[3]/textarea)'),
            targetPage.locator(':scope >>> #o-1778884828 textarea')
        ])
            .setTimeout(timeout)
            .fill('Vi');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(文本输入框)'),
            targetPage.locator('#o-1778884828 textarea'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[3]/textarea)'),
            targetPage.locator(':scope >>> #o-1778884828 textarea')
        ])
            .setTimeout(timeout)
            .fill('ViViviendo en China desde los 16 años por una beca');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(文本输入框)'),
            targetPage.locator('#o-1778884828 textarea'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[3]/textarea)'),
            targetPage.locator(':scope >>> #o-1778884828 textarea')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 25,
                y: 5.109375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(文本输入框)'),
            targetPage.locator('#o-1778884828 textarea'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[3]/textarea)'),
            targetPage.locator(':scope >>> #o-1778884828 textarea')
        ])
            .setTimeout(timeout)
            .fill('iViviendo en China desde los 16 años por una beca');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(文本输入框)'),
            targetPage.locator('#o-1778884828 textarea'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[3]/textarea)'),
            targetPage.locator(':scope >>> #o-1778884828 textarea')
        ])
            .setTimeout(timeout)
            .fill('Viviendo en China desde los 16 años por una beca');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(完成)'),
            targetPage.locator('button.Typs\\(button-2\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[1]/button[2])'),
            targetPage.locator(':scope >>> button.Typs\\(button-2\\)'),
            targetPage.locator('::-p-text(完成)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 24.203125,
                y: 22,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.c9iqosj span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div/div[3]/button/div[2]/div[2]/div/span)'),
            targetPage.locator(':scope >>> div.c9iqosj span'),
            targetPage.locator('::-p-text(保存)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 14.6015625,
                y: 6,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(1 of 2) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('#carousel-item-0 > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"carousel-item-0\\"]/div)'),
            targetPage.locator(':scope >>> #carousel-item-0 > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 353,
                y: 266.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.c9iqosj span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[2]/a/div[2]/div[2]/div/span)'),
            targetPage.locator(':scope >>> div.c9iqosj span'),
            targetPage.locator('::-p-text(\\(56% 已完成\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 56.625,
                y: 8,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://huggingface.co/spaces/multimodalart/Ip-Adapter-FaceID', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(将文件拖放到此处 - 或 - 点击上传)'),
            targetPage.locator('#component-5 > button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"component-5\\"]/button)'),
            targetPage.locator(':scope >>> #component-5 > button')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 437,
                y: 118.453125,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator("[data-testid='file-upload']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"file-upload\\"])'),
            targetPage.locator(":scope >>> [data-testid='file-upload']")
        ])
            .setTimeout(timeout)
            .fill('C:\\fakepath\\sami-bueno.jpeg');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator("::-p-aria(Prompt Try something like \\'a photo of a man/woman/person\\')"),
            targetPage.locator("#component-9 [data-testid='textbox']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"textbox\\"])'),
            targetPage.locator(":scope >>> #component-9 [data-testid='textbox']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 281,
                y: 5.0625,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator("::-p-aria(Prompt Try something like \\'a photo of a man/woman/person\\')"),
            targetPage.locator("#component-9 [data-testid='textbox']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"textbox\\"])'),
            targetPage.locator(":scope >>> #component-9 [data-testid='textbox']")
        ])
            .setTimeout(timeout)
            .fill('A ');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('a');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator("::-p-aria(Prompt Try something like \\'a photo of a man/woman/person\\')"),
            targetPage.locator("#component-9 [data-testid='textbox']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"textbox\\"])'),
            targetPage.locator(":scope >>> #component-9 [data-testid='textbox']")
        ])
            .setTimeout(timeout)
            .fill('A photo of a man handsome and natural');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Meta');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('a');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('c');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('Meta');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Negative Prompt)'),
            targetPage.locator("#component-10 [data-testid='textbox']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"textbox\\"])'),
            targetPage.locator(":scope >>> #component-10 [data-testid='textbox']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 228,
                y: 13.46875,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Negative Prompt)'),
            targetPage.locator("#component-10 [data-testid='textbox']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"textbox\\"])'),
            targetPage.locator(":scope >>> #component-10 [data-testid='textbox']")
        ])
            .setTimeout(timeout)
            .fill('low quality');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('#component-13'),
            targetPage.locator('::-p-xpath(//*[@id=\\"component-13\\"])'),
            targetPage.locator(':scope >>> #component-13')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 370,
                y: 8.078125,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Advanced Options ▼)'),
            targetPage.locator('#component-13 > button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"component-13\\"]/button)'),
            targetPage.locator(':scope >>> #component-13 > button'),
            targetPage.locator('::-p-text(Advanced Options ▼)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 357,
                y: 15.078125,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Submit)'),
            targetPage.locator('#component-12'),
            targetPage.locator('::-p-xpath(//*[@id=\\"component-12\\"])'),
            targetPage.locator(':scope >>> #component-12'),
            targetPage.locator('::-p-text(Submit)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 488,
                y: 33.078125,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://huggingface.co/spaces/unity/IP-Adapter-Instruct', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(将图像拖放到此处 - 或 - 点击上传)'),
            targetPage.locator('#component-5 div > button'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"image\\"]/div/button)'),
            targetPage.locator(':scope >>> #component-5 div > button')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 536,
                y: 63.453125,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator("#component-5 [data-testid='file-upload']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"file-upload\\"])'),
            targetPage.locator(":scope >>> #component-5 [data-testid='file-upload']")
        ])
            .setTimeout(timeout)
            .fill('C:\\fakepath\\sami-bueno.jpeg');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('#component-4'),
            targetPage.locator('::-p-xpath(//*[@id=\\"component-4\\"])'),
            targetPage.locator(':scope >>> #component-4')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 257,
                y: 309.453125,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator("::-p-aria(Prompt Try something like \\'a photo of a man/woman/person\\')"),
            targetPage.locator("#component-9 [data-testid='textbox']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"textbox\\"])'),
            targetPage.locator(":scope >>> #component-9 [data-testid='textbox']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 253,
                y: 3.046875,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator("::-p-aria(Prompt Try something like \\'a photo of a man/woman/person\\')"),
            targetPage.locator("#component-9 [data-testid='textbox']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"textbox\\"])'),
            targetPage.locator(":scope >>> #component-9 [data-testid='textbox']")
        ])
            .setTimeout(timeout)
            .fill('A photo of a man handsome and natural');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Instruct Query)'),
            targetPage.locator('#component-4 > div.form input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"component-10\\"]/div[2]/div/div[1]/div/input)'),
            targetPage.locator(':scope >>> #component-4 > div.form input'),
            targetPage.locator('::-p-text(use everything)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 227,
                y: 8.453125,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('#component-10 > div.svelte-1sk0pyu'),
            targetPage.locator('::-p-xpath(//*[@id=\\"component-10\\"]/div[2])'),
            targetPage.locator(':scope >>> #component-10 > div.svelte-1sk0pyu')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 289,
                y: 8.046875,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Negative Prompt)'),
            targetPage.locator("#component-11 [data-testid='textbox']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"textbox\\"])'),
            targetPage.locator(":scope >>> #component-11 [data-testid='textbox']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 304,
                y: 32.859375,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Negative Prompt)'),
            targetPage.locator("#component-11 [data-testid='textbox']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"textbox\\"])'),
            targetPage.locator(":scope >>> #component-11 [data-testid='textbox']")
        ])
            .setTimeout(timeout)
            .fill('low quality');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Submit)'),
            targetPage.locator('#component-12'),
            targetPage.locator('::-p-xpath(//*[@id=\\"component-12\\"])'),
            targetPage.locator(':scope >>> #component-12'),
            targetPage.locator('::-p-text(Submit)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 479,
                y: 16.859375,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Shift');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('Shift');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://huggingface.co/spaces/umangal/Dating-advice-bot', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://umangal-dating-advice-bot.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Ask your dating question 🔥)'),
            targetPage.locator("#component-7 [data-testid='textbox']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"textbox\\"])'),
            targetPage.locator(":scope >>> #component-7 [data-testid='textbox']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 436,
                y: 26.859375,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://umangal-dating-advice-bot.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Meta');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://umangal-dating-advice-bot.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('Meta');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://umangal-dating-advice-bot.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Ask your dating question 🔥)'),
            targetPage.locator("#component-7 [data-testid='textbox']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"textbox\\"])'),
            targetPage.locator(":scope >>> #component-7 [data-testid='textbox']")
        ])
            .setTimeout(timeout)
            .fill('A photo of a man handsome and natural');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://umangal-dating-advice-bot.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Advice Style)'),
            targetPage.locator('input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"component-1\\"]/div[2]/div/div[1]/div/input)'),
            targetPage.locator(':scope >>> input'),
            targetPage.locator('::-p-text(Roast Me 💀)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 429,
                y: 5.265625,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://umangal-dating-advice-bot.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('#component-7'),
            targetPage.locator('::-p-xpath(//*[@id=\\"component-7\\"])'),
            targetPage.locator(':scope >>> #component-7')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 453,
                y: 216.453125,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://umangal-dating-advice-bot.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Submit)'),
            targetPage.locator('#component-12'),
            targetPage.locator('::-p-xpath(//*[@id=\\"component-12\\"])'),
            targetPage.locator(':scope >>> #component-12'),
            targetPage.locator('::-p-text(Submit)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 144,
                y: 28.765625,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://umangal-dating-advice-bot.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://umangal-dating-advice-bot.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Shift');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://umangal-dating-advice-bot.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('Shift');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://umangal-dating-advice-bot.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://umangal-dating-advice-bot.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://umangal-dating-advice-bot.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://umangal-dating-advice-bot.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://umangal-dating-advice-bot.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://umangal-dating-advice-bot.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Shift');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://umangal-dating-advice-bot.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('Shift');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://unity-ip-adapter-instruct.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Shift');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('Shift');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Control');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://multimodalart-ip-adapter-faceid.hf.space/?__theme=system', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(个人资料照片[role=\\"image\\"])'),
            targetPage.locator('nav.D\\(f\\) > a > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/a/div/div)'),
            targetPage.locator(':scope >>> nav.D\\(f\\) > a > div > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 27,
                y: 7.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.Wc\\(\\$transform\\) button.End\\(0\\) > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div[1]/div/div/div[2]/div[1]/section/button[2]/svg)'),
            targetPage.locator(':scope >>> div.Wc\\(\\$transform\\) button.End\\(0\\) > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 8,
                y: 17,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.Wc\\(\\$transform\\) button.End\\(0\\) > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div[1]/div/div/div[2]/div[1]/section/button[2]/svg)'),
            targetPage.locator(':scope >>> div.Wc\\(\\$transform\\) button.End\\(0\\) > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 8,
                y: 17,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 25.97283935546875,
                y: 4.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 2.97283935546875,
                y: 8.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#main-content label'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div[1]/div/div/div[5]/div/div[5]/div/div/div/div/div[2]/button/span/label)'),
            targetPage.locator(':scope >>> #main-content label'),
            targetPage.locator('::-p-text(8.5x)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 20.7421875,
                y: 9.70001220703125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#o787701392 > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div)'),
            targetPage.locator(':scope >>> #o787701392 > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 812,
                y: 479,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              count: 2,
              offset: {
                x: 10.97283935546875,
                y: 1.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 10.97283935546875,
                y: 1.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 10.97283935546875,
                y: 1.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 10.97283935546875,
                y: 1.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 10.97283935546875,
                y: 1.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 10.97283935546875,
                y: 1.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 10.97283935546875,
                y: 1.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 10.97283935546875,
                y: 1.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(个人资料照片)'),
            targetPage.locator('a > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/a/div/div)'),
            targetPage.locator(':scope >>> a > div > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 31,
                y: 17.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(探索) >>>> ::-p-aria([role=\\"image\\"])'),
            targetPage.locator('div.Fx\\(\\$flx1\\) > a > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/div[2]/a/svg)'),
            targetPage.locator(':scope >>> div.Fx\\(\\$flx1\\) > a > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 10,
                y: 13.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#catalog-page > section:nth-of-type(1) button:nth-of-type(1) div.StretchedBox'),
            targetPage.locator('::-p-xpath(//*[@id=\\"catalog-page\\"]/section[1]/section/div/button[1]/div/div/div[1])'),
            targetPage.locator(':scope >>> #catalog-page > section:nth-of-type(1) button:nth-of-type(1) div.StretchedBox')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 28,
                y: 26,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 23.322265625,
                y: 1.38946533203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              count: 2,
              offset: {
                x: 23.34893798828125,
                y: 10.4161376953125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#catalog-page > section:nth-of-type(1) button:nth-of-type(2) div.StretchedBox'),
            targetPage.locator('::-p-xpath(//*[@id=\\"catalog-page\\"]/section[1]/section/div/button[2]/div/div/div[1])'),
            targetPage.locator(':scope >>> #catalog-page > section:nth-of-type(1) button:nth-of-type(2) div.StretchedBox')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 91.5,
                y: 93,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              count: 2,
              offset: {
                x: 51.32958984375,
                y: 45.39678955078125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.B\\(0\\) > div > div:nth-of-type(1) > button > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div[1]/div/div/div[5]/div/div[1]/button/span)'),
            targetPage.locator(':scope >>> div.B\\(0\\) > div > div:nth-of-type(1) > button > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 39.67938232421875,
                y: 16.57470703125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.Fx\\(\\$flx1\\) > div > div.Pos\\(r\\) > div > div > div.B\\(0\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div[1]/div/div/div[4])'),
            targetPage.locator(':scope >>> div.Fx\\(\\$flx1\\) > div > div.Pos\\(r\\) > div > div > div.B\\(0\\)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 54,
                y: 38.20001220703125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.Fx\\(\\$flx1\\) > div > div.Pos\\(r\\) > div > div > div.B\\(0\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div[1]/div/div/div[4])'),
            targetPage.locator(':scope >>> div.Fx\\(\\$flx1\\) > div > div.Pos\\(r\\) > div > div > div.B\\(0\\)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 28,
                y: 39.20001220703125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(返回探索页面) >>>> ::-p-aria([role=\\"graphics-symbol\\"])'),
            targetPage.locator('#main-content nav path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/nav/div[1]/button/svg/g/path)'),
            targetPage.locator(':scope >>> #main-content nav path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 4.022552490234375,
                y: 18.022514820098877,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#main-content > div.H\\(100\\%\\) > div > div > div > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div)'),
            targetPage.locator(':scope >>> #main-content > div.H\\(100\\%\\) > div > div > div > div > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 19,
                y: 26,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#\\:r98\\:-text'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r98:-text\\"])'),
            targetPage.locator(':scope >>> #\\:r98\\:-text'),
            targetPage.locator('::-p-text(隐藏)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 12.0234375,
                y: 10,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#\\:r98\\:-text'),
            targetPage.locator('::-p-xpath(//*[@id=\\":r98:-text\\"])'),
            targetPage.locator(':scope >>> #\\:r98\\:-text'),
            targetPage.locator('::-p-text(隐藏)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 22.6015625,
                y: 15,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowDown');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowDown');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(1 of 6) >>>> ::-p-aria(个人资料照片 1)'),
            targetPage.locator('div.Wc\\(\\$transform\\) section div:nth-of-type(1) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"carousel-item-0\\"]/div)'),
            targetPage.locator(':scope >>> div.Wc\\(\\$transform\\) section div:nth-of-type(1) > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 321,
                y: 466,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowUp');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowUp');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.StretchedBox > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div[3]/div)'),
            targetPage.locator(':scope >>> div.StretchedBox > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 616,
                y: 339,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(下一张照片) >>>> ::-p-aria([role=\\"graphics-symbol\\"])'),
            targetPage.locator('button.End\\(0\\) path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div[1]/div[1]/div[2]/div[1]/span/section/button[2]/svg/path)'),
            targetPage.locator(':scope >>> button.End\\(0\\) path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 4.27044677734375,
                y: 12.448028564453125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div/div[1]/div[2]/div/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 9.4700927734375,
                y: 21.3372802734375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#catalog-page'),
            targetPage.locator('::-p-xpath(//*[@id=\\"catalog-page\\"])'),
            targetPage.locator(':scope >>> #catalog-page')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 322,
                y: 7,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(消息) >>>> ::-p-aria([role=\\"graphics-symbol\\"])'),
            targetPage.locator('a:nth-of-type(4) path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/div/div/nav/div/a[4]/div/svg/path)'),
            targetPage.locator(':scope >>> a:nth-of-type(4) path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 15.088531494140625,
                y: 10.33331298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(消息)'),
            targetPage.locator('#o775463182'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o775463182\\"])'),
            targetPage.locator(':scope >>> #o775463182')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 27.796875,
                y: 7,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(配对)'),
            targetPage.locator('#o609274768'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o609274768\\"])'),
            targetPage.locator(':scope >>> #o609274768')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 24,
                y: 3,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul div > div.Pos\\(r\\) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"likes-you\\"]/div/div[1]/div)'),
            targetPage.locator(':scope >>> ul div > div.Pos\\(r\\) > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 38.78235626220703,
                y: 64.40446472167969,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Aithana)'),
            targetPage.locator('button:nth-of-type(1) span > div'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"likesYouCard\\"]/span/div)'),
            targetPage.locator(':scope >>> button:nth-of-type(1) span > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 113.5,
                y: 186,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[2]/div[2]/div/div[2]/div/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 21.860107421875,
                y: 5.8863525390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(新配对，多亏了 Boost！)'),
            targetPage.locator('div.notificationManager h3'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[2]/div/a/div[2]/div/h3)'),
            targetPage.locator(':scope >>> div.notificationManager h3'),
            targetPage.locator('::-p-text(新配对，多亏了 Boost！)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 106,
                y: 16,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('button.My\\(12px\\) div.c9iqosj'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/button[1]/div[2]/div[2])'),
            targetPage.locator(':scope >>> button.My\\(12px\\) div.c9iqosj')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 190.5,
                y: 39,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 47,
                y: 13,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .fill('Hola!! Qué tal');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(发送) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('#main-content button.button > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[1]/div/div/div[3]/form/button[2]/span)'),
            targetPage.locator(':scope >>> #main-content button.button > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 29.640625,
                y: 5.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.BdT > div > div:nth-of-type(1) path:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[1]/div/div/div[3]/div/div[1]/button/svg/g/path[2])'),
            targetPage.locator(':scope >>> div.BdT > div > div:nth-of-type(1) path:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 16,
                y: 7.83331298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(1 of 9) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('#carousel-item-0 > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"carousel-item-0\\"]/div)'),
            targetPage.locator(':scope >>> #carousel-item-0 > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 308,
                y: 201.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(2 of 9) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('#carousel-item-1 > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"carousel-item-1\\"]/div)'),
            targetPage.locator(':scope >>> #carousel-item-1 > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 308,
                y: 201.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(3 of 9) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('#carousel-item-2 > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"carousel-item-2\\"]/div)'),
            targetPage.locator(':scope >>> #carousel-item-2 > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 308,
                y: 201.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(4 of 9) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('#carousel-item-3 > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"carousel-item-3\\"]/div)'),
            targetPage.locator(':scope >>> #carousel-item-3 > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 308,
                y: 201.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(5 of 9) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('#carousel-item-4 > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"carousel-item-4\\"]/div)'),
            targetPage.locator(':scope >>> #carousel-item-4 > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 308,
                y: 201.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(6 of 9) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('#carousel-item-5 > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"carousel-item-5\\"]/div)'),
            targetPage.locator(':scope >>> #carousel-item-5 > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 308,
                y: 201.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(7 of 9) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('#carousel-item-6 > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"carousel-item-6\\"]/div)'),
            targetPage.locator(':scope >>> #carousel-item-6 > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 308,
                y: 201.5,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(分享我的whatsapp)'),
            targetPage.locator('div:nth-of-type(10) > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[1]/div/div/div[3]/div[1]/div/div/div[1]/div[10]/div/div)'),
            targetPage.locator(':scope >>> div:nth-of-type(10) > div > div'),
            targetPage.locator('::-p-text(+WhatsApp)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 79.25,
                y: 2,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(US +1)'),
            targetPage.locator('#o787701392 > div > div div.Ta\\(c\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/form/div[1])'),
            targetPage.locator(':scope >>> #o787701392 > div > div div.Ta\\(c\\)'),
            targetPage.locator('::-p-text(US +1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 27.421875,
                y: 3.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(搜索[role=\\"textbox\\"])'),
            targetPage.locator('input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div/div[1]/div/input)'),
            targetPage.locator(':scope >>> input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 136.5,
                y: 25.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(搜索[role=\\"textbox\\"])'),
            targetPage.locator('input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div/div[1]/div/input)'),
            targetPage.locator(':scope >>> input')
        ])
            .setTimeout(timeout)
            .fill('34');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria( 西班牙 +34 )'),
            targetPage.locator('#o787701392 button:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div/div[2]/div/button[2])'),
            targetPage.locator(':scope >>> #o787701392 button:nth-of-type(2)'),
            targetPage.locator('::-p-text(西班牙+34)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 186.5,
                y: 5.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(手机号码[role=\\"textbox\\"])'),
            targetPage.locator('#contact-card-input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"contact-card-input\\"])'),
            targetPage.locator(':scope >>> #contact-card-input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 110.5,
                y: 10.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(手机号码[role=\\"textbox\\"])'),
            targetPage.locator('#contact-card-input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"contact-card-input\\"])'),
            targetPage.locator(':scope >>> #contact-card-input')
        ])
            .setTimeout(timeout)
            .fill('679794037');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('button:nth-of-type(1) div.c9iqosj > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/form/div[3]/button[1]/div[2]/div[2]/div)'),
            targetPage.locator(':scope >>> button:nth-of-type(1) div.c9iqosj > div'),
            targetPage.locator('::-p-text(添加)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 17.6015625,
                y: 5.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(分享我的whatsapp)'),
            targetPage.locator('div.Pos\\(a\\) > div > div > div.D\\(f\\) > div:nth-of-type(1) > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[1]/div/div/div[3]/div[1]/div/div/div[1]/div[1]/div/div)'),
            targetPage.locator(':scope >>> div.Pos\\(a\\) > div > div > div.D\\(f\\) > div:nth-of-type(1) > div > div'),
            targetPage.locator('::-p-text(+34 679 79 40)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 134,
                y: 9,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(发送) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('#main-content button.button > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[1]/div/div/div[3]/form/button[2]/span)'),
            targetPage.locator(':scope >>> #main-content button.button > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 11.640625,
                y: 7.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 144,
                y: 23,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .fill('Aquí estamos. Estás por usera?');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(配对选项) >>>> ::-p-aria([role=\\"none\\"])'),
            targetPage.locator('div.Mend\\(16px\\)--ml svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[1]/div/div/div[1]/div[2]/button/svg)'),
            targetPage.locator(':scope >>> div.Mend\\(16px\\)--ml svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 18,
                y: 12.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Cancel)'),
            targetPage.locator('#o787701392 div > button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div/div/button)'),
            targetPage.locator(':scope >>> #o787701392 div > button'),
            targetPage.locator('::-p-text(Cancel)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 41.796875,
                y: 30.953125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('button.My\\(12px\\) div.c9iqosj'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/button[1]/div[2]/div[2])'),
            targetPage.locator(':scope >>> button.My\\(12px\\) div.c9iqosj')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 247.5,
                y: 17.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(配对)'),
            targetPage.locator('#o609274768'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o609274768\\"])'),
            targetPage.locator(':scope >>> #o609274768')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 32,
                y: 0,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul div > div.Pos\\(r\\) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"likes-you\\"]/div/div[1]/div)'),
            targetPage.locator(':scope >>> ul div > div.Pos\\(r\\) > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 57.849220275878906,
                y: 53.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Asi)'),
            targetPage.locator('#main-content span > div'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"likesYouCard\\"]/span/div)'),
            targetPage.locator(':scope >>> #main-content span > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 174.5,
                y: 104,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(下一张照片) >>>> ::-p-aria([role=\\"none\\"])'),
            targetPage.locator('button.End\\(0\\) > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div[2]/div[1]/span/section/button[2]/svg)'),
            targetPage.locator(':scope >>> button.End\\(0\\) > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 7,
                y: 12.125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[2]/div[2]/div/div[2]/div/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 9.7303466796875,
                y: 10.8978271484375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(消息)'),
            targetPage.locator('#o775463182'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o775463182\\"])'),
            targetPage.locator(':scope >>> #o775463182')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 1.796875,
                y: 19,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(在 Boost 的帮助下，你已与 Aithana 配对。)'),
            targetPage.locator('#link-description-651af4ff79b4b8010003ae856878a5d1aa9ff4f697a79763 > div.D\\(f\\) svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"link-description-651af4ff79b4b8010003ae856878a5d1aa9ff4f697a79763\\"]/div[1]/div/div/svg)'),
            targetPage.locator(':scope >>> #link-description-651af4ff79b4b8010003ae856878a5d1aa9ff4f697a79763 > div.D\\(f\\) svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 15.921875,
                y: 14,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.H\\(100\\%\\) > div > div > div > div > div.Fx\\(\\$flx1\\) div:nth-of-type(2) path:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[1]/div/div/div[3]/div/div[2]/button/svg/path[2])'),
            targetPage.locator(':scope >>> div.H\\(100\\%\\) > div > div > div > div > div.Fx\\(\\$flx1\\) div:nth-of-type(2) path:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 16,
                y: 12,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(对话记录)'),
            targetPage.locator('#SC\\.chat_651af4ff79b4b8010003ae856878a5d1aa9ff4f697a79763'),
            targetPage.locator('::-p-xpath(//*[@id=\\"SC.chat_651af4ff79b4b8010003ae856878a5d1aa9ff4f697a79763\\"])'),
            targetPage.locator(':scope >>> #SC\\.chat_651af4ff79b4b8010003ae856878a5d1aa9ff4f697a79763')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 441,
                y: 336,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.Bdtc\\(\\$c-ds-divider-primary\\) > div > div:nth-of-type(2) path:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[1]/div/div/div[3]/div[2]/div/div[2]/button/svg/path[2])'),
            targetPage.locator(':scope >>> div.Bdtc\\(\\$c-ds-divider-primary\\) > div > div:nth-of-type(2) path:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 17,
                y: 15,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 132,
                y: 36,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .fill('@');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('2');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .fill('');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(表情) >>>> ::-p-aria([role=\\"graphics-symbol\\"])'),
            targetPage.locator('form path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"emoji-picker-trigger\\"]/svg/path)'),
            targetPage.locator(':scope >>> form path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 10.97393798828125,
                y: 19.33331298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(🥰)'),
            targetPage.locator('div:nth-of-type(2) > button:nth-of-type(14)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"Tinder\\"]/body/div[6]/div/div[2]/div/div[2]/div[2]/button[14])'),
            targetPage.locator(':scope >>> div:nth-of-type(2) > button:nth-of-type(14)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 26.5078125,
                y: 14.3046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(发送)'),
            targetPage.locator('#main-content button.button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[1]/div/div/div[3]/form/button[2])'),
            targetPage.locator(':scope >>> #main-content button.button')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 55.640625,
                y: 14,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(配对)'),
            targetPage.locator('#o609274768'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o609274768\\"])'),
            targetPage.locator(':scope >>> #o609274768')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 12,
                y: 2,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('aside label'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/div/div/div/div/div/div/div[2]/button/span/label)'),
            targetPage.locator(':scope >>> aside label'),
            targetPage.locator('::-p-text(8.8x)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 18.9921875,
                y: 6.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.Pt\\(12px\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2])'),
            targetPage.locator(':scope >>> div.Pt\\(12px\\)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 264.5,
                y: 38.875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.Pt\\(12px\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2])'),
            targetPage.locator(':scope >>> div.Pt\\(12px\\)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 200.5,
                y: 9.875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.c9iqosj > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/button/div[2]/div[2]/div)'),
            targetPage.locator(':scope >>> div.c9iqosj > div'),
            targetPage.locator('::-p-text(确定)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 29.6015625,
                y: 17.875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(个人资料照片)'),
            targetPage.locator('nav.D\\(f\\) > a > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/a/div/div)'),
            targetPage.locator(':scope >>> nav.D\\(f\\) > a > div > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 31,
                y: 17.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(1 of 2) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('#carousel-item-0 > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"carousel-item-0\\"]/div)'),
            targetPage.locator(':scope >>> #carousel-item-0 > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 345,
                y: 223.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(返回) >>>> ::-p-aria([role=\\"graphics-symbol\\"])'),
            targetPage.locator('div.Mx\\(12px\\) path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/div[1]/a/svg/g/path)'),
            targetPage.locator(':scope >>> div.Mx\\(12px\\) path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 8.625,
                y: 6.500110626220703,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('aside li:nth-of-type(1) path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"likes-you\\"]/div/div/svg/path)'),
            targetPage.locator(':scope >>> aside li:nth-of-type(1) path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 31.694786071777344,
                y: 3.994354248046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(2) div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"my-likes\\"]/div/div)'),
            targetPage.locator(':scope >>> li:nth-of-type(2) div > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 15.855972290039062,
                y: 55.48731994628906,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Ana)'),
            targetPage.locator('button:nth-of-type(3) span > div'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"likesYouCard\\"]/span/div)'),
            targetPage.locator(':scope >>> button:nth-of-type(3) span > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 51.5,
                y: 88,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(下一张照片) >>>> ::-p-aria([role=\\"none\\"])'),
            targetPage.locator('button.End\\(0\\) > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div[2]/div[1]/span/section/button[2]/svg)'),
            targetPage.locator(':scope >>> button.End\\(0\\) > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 6,
                y: 15.125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(下一张照片) >>>> ::-p-aria([role=\\"none\\"])'),
            targetPage.locator('button.End\\(0\\) > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div[2]/div[1]/span/section/button[2]/svg)'),
            targetPage.locator(':scope >>> button.End\\(0\\) > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 6,
                y: 15.125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(配对[role=\\"tabpanel\\"]) >>>> ::-p-aria([role=\\"list\\"])'),
            targetPage.locator('aside ul'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1863285868\\"]/ul)'),
            targetPage.locator(':scope >>> aside ul'),
            targetPage.locator('::-p-text(得到赞赞过谁AsiBoostJacqueline)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 147,
                y: 259,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(消息)'),
            targetPage.locator('#o775463182'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o775463182\\"])'),
            targetPage.locator(':scope >>> #o775463182'),
            targetPage.locator('::-p-text(消息)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 25.796875,
                y: 13,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('circle'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"profileBackButton\\"]/svg/g/circle)'),
            targetPage.locator(':scope >>> circle')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 18.94921875,
                y: 23.894561767578125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Lili)'),
            targetPage.locator('button:nth-of-type(19) span > div'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"likesYouCard\\"]/span/div)'),
            targetPage.locator(':scope >>> button:nth-of-type(19) span > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 146.5,
                y: 151,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.StretchedBox > div:nth-of-type(3) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[2]/div[3]/div)'),
            targetPage.locator(':scope >>> div.StretchedBox > div:nth-of-type(3) > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 102,
                y: 477,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[2]/div[2]/div/div[2]/div/div/div[3]/div/div/div/button/span/span[1])'),
            targetPage.locator(':scope >>> span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 16.4483642578125,
                y: 39.9249267578125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(个人资料照片)'),
            targetPage.locator('nav > a > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav/a/div/div)'),
            targetPage.locator(':scope >>> nav > a > div > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 10,
                y: 16.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(返回)'),
            targetPage.locator('div.Mx\\(12px\\) > a'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/div[1]/a)'),
            targetPage.locator(':scope >>> div.Mx\\(12px\\) > a')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 33.997642517089844,
                y: 25.497642517089844,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#main-content > div.H\\(100\\%\\) > div > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div)'),
            targetPage.locator(':scope >>> #main-content > div.H\\(100\\%\\) > div > div > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 781,
                y: 538,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(1 of 9) >>>> ::-p-aria(个人资料照片 1)'),
            targetPage.locator('div.Wc\\(\\$transform\\) section div:nth-of-type(1) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"carousel-item-0\\"]/div)'),
            targetPage.locator(':scope >>> div.Wc\\(\\$transform\\) section div:nth-of-type(1) > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 364,
                y: 299,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.Wc\\(\\$transform\\) circle'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[2]/div[2]/button/div/div/div/div/div[1]/button/svg/circle)'),
            targetPage.locator(':scope >>> div.Wc\\(\\$transform\\) circle')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 18.88330078125,
                y: 14.00830078125,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Hana的照片) >>>> ::-p-aria(个人资料照片 1)'),
            targetPage.locator('div.Wc\\(\\$transform\\) section div:nth-of-type(1) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"carousel-item-0\\"]/div)'),
            targetPage.locator(':scope >>> div.Wc\\(\\$transform\\) section div:nth-of-type(1) > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 326,
                y: 330,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(个人资料照片 2)'),
            targetPage.locator('#\\:rgh\\: > div:nth-of-type(2) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"carousel-item-1\\"]/div)'),
            targetPage.locator(':scope >>> #\\:rgh\\: > div:nth-of-type(2) > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 331,
                y: 325,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(个人资料照片 3)'),
            targetPage.locator('div.Wc\\(\\$transform\\) div:nth-of-type(3) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"carousel-item-2\\"]/div)'),
            targetPage.locator(':scope >>> div.Wc\\(\\$transform\\) div:nth-of-type(3) > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 331,
                y: 325,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(工作模式) >>>> ::-p-aria([role=\\"image\\"])'),
            targetPage.locator('aside button:nth-of-type(1) > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav/div/button[1]/svg)'),
            targetPage.locator(':scope >>> aside button:nth-of-type(1) > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 4,
                y: 4.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Tinder 工作模式 会议记录)'),
            targetPage.locator('div.Ovy\\(s\\) img'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[4]/div/div/img)'),
            targetPage.locator(':scope >>> div.Ovy\\(s\\) img')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 704.5,
                y: 65,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.H\\(36px\\) > div.H\\(100\\%\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/div[2])'),
            targetPage.locator(':scope >>> div.H\\(36px\\) > div.H\\(100\\%\\)'),
            targetPage.locator('::-p-text(编辑中……)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 115.3359375,
                y: 16,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.Typs\\(body-3-regular\\) > span:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[1]/div[2]/div[2]/span[1])'),
            targetPage.locator(':scope >>> div.Typs\\(body-3-regular\\) > span:nth-of-type(1)'),
            targetPage.locator('::-p-text(文件)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 7,
                y: 12.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.H\\(60px\\) > div.H\\(100\\%\\) > img'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[1]/div[1]/img)'),
            targetPage.locator(':scope >>> div.H\\(60px\\) > div.H\\(100\\%\\) > img')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 8,
                y: 4.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.c9iqosj > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[1]/button/div[2]/div[2]/div)'),
            targetPage.locator(':scope >>> div.c9iqosj > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 32.203125,
                y: 1.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(工作模式) >>>> ::-p-aria([role=\\"image\\"])'),
            targetPage.locator('aside button:nth-of-type(1) > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav/div/button[1]/svg)'),
            targetPage.locator(':scope >>> aside button:nth-of-type(1) > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 4,
                y: 8.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.Typs\\(body-3-regular\\) > span:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[1]/div[2]/div[2]/span[1])'),
            targetPage.locator(':scope >>> div.Typs\\(body-3-regular\\) > span:nth-of-type(1)'),
            targetPage.locator('::-p-text(文件)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 1,
                y: 1.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.H\\(60px\\) > div.H\\(100\\%\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[1]/div[1])'),
            targetPage.locator(':scope >>> div.H\\(60px\\) > div.H\\(100\\%\\)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 30,
                y: 49,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.H\\(36px\\) > div.H\\(100\\%\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/div[2])'),
            targetPage.locator(':scope >>> div.H\\(36px\\) > div.H\\(100\\%\\)'),
            targetPage.locator('::-p-text(编辑中……)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 117.3359375,
                y: 18,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#o787701392 > div > div > img'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/img)'),
            targetPage.locator(':scope >>> #o787701392 > div > div > img')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 25,
                y: 30.7734375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.c9iqosj > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[1]/button/div[2]/div[2]/div)'),
            targetPage.locator(':scope >>> div.c9iqosj > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 7.203125,
                y: 14.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(个人资料照片)'),
            targetPage.locator('nav > a > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav/a/div/div)'),
            targetPage.locator(':scope >>> nav > a > div > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 25,
                y: 10.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(有个人资料)'),
            targetPage.locator("div:nth-of-type(3) [data-testid='toggle-switch-input']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"toggle-switch-input\\"])'),
            targetPage.locator(":scope >>> div:nth-of-type(3) [data-testid='toggle-switch-input']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 34,
                y: 9,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(最大年龄)'),
            targetPage.locator("[data-testid='max-age-handle']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"max-age-handle\\"])'),
            targetPage.locator(":scope >>> [data-testid='max-age-handle']")
        ])
            .setTimeout(timeout)
            .click({
              delay: 382.90000000037253,
              offset: {
                x: 7.3671875,
                y: 11,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator("span:nth-of-type(4) [data-testid='toggle-switch-input']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"toggle-switch-input\\"])'),
            targetPage.locator(":scope >>> span:nth-of-type(4) [data-testid='toggle-switch-input']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 31,
                y: 17,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('button:nth-of-type(12) > span > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div/div[3]/div[2]/button[12]/span/span)'),
            targetPage.locator(':scope >>> button:nth-of-type(12) > span > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 296,
                y: 37,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(1) > span > span > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div/div[2]/div/div[1]/div[1]/span/span/span)'),
            targetPage.locator(':scope >>> div:nth-of-type(1) > span > span > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 48,
                y: 9.6015625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('aside div.c9iqosj'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div/div[3]/a/div[2]/div[2])'),
            targetPage.locator(':scope >>> aside div.c9iqosj')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 240.75,
                y: 20.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(剩余 1 次 Super Like. 获取更多 Super Like)'),
            targetPage.locator('nav.NetHeight\\(100\\%\\,--side-nav-bar-height\\) div.Mend\\(12px\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div/div[1]/div[2]/div[2])'),
            targetPage.locator(':scope >>> nav.NetHeight\\(100\\%\\,--side-nav-bar-height\\) div.Mend\\(12px\\)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 103,
                y: 10,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#o787701392 > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div)'),
            targetPage.locator(':scope >>> #o787701392 > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 284,
                y: 423,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('nav.NetHeight\\(100\\%\\,--side-nav-bar-height\\) > div > div > div > div > div > div > div:nth-of-type(2) button:nth-of-type(4) > span > span > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div/div/div[2]/div[1]/button[4]/span/span/span)'),
            targetPage.locator(':scope >>> nav.NetHeight\\(100\\%\\,--side-nav-bar-height\\) > div > div > div > div > div > div > div:nth-of-type(2) button:nth-of-type(4) > span > span > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 256,
                y: 18.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('nav.D\\(f\\) label'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/div/div/div/div/div/div/div[2]/button/span/label)'),
            targetPage.locator(':scope >>> nav.D\\(f\\) label'),
            targetPage.locator('::-p-text(8.9x)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 11.0078125,
                y: 2.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#o787701392 div.c9iqosj'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/button/div[2]/div[2])'),
            targetPage.locator(':scope >>> #o787701392 div.c9iqosj')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 74.6015625,
                y: 36.875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(个人资料照片)'),
            targetPage.locator('aside a > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/a/div/div)'),
            targetPage.locator(':scope >>> aside a > div > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 12,
                y: 17.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(返回) >>>> ::-p-aria([role=\\"image\\"])'),
            targetPage.locator('div.Mx\\(12px\\) svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/div[1]/a/svg)'),
            targetPage.locator(':scope >>> div.Mx\\(12px\\) svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 11,
                y: 3.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.Wc\\(\\$transform\\) button > div > div > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[2]/div[2]/button/div/div/div/div)'),
            targetPage.locator(':scope >>> div.Wc\\(\\$transform\\) button > div > div > div > div'),
            targetPage.locator('::-p-text(罗31已验证打开个人资料已匹配)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 341,
                y: 45.5,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(消息)'),
            targetPage.locator('#o775463182'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o775463182\\"])'),
            targetPage.locator(':scope >>> #o775463182'),
            targetPage.locator('::-p-text(消息)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 1.796875,
                y: 0,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Mónica的照片) >>>> ::-p-aria(下一张照片)'),
            targetPage.locator('div.Wc\\(\\$transform\\) button.End\\(0\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[2]/div[1]/section/button[2])'),
            targetPage.locator(':scope >>> div.Wc\\(\\$transform\\) button.End\\(0\\)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 18,
                y: 0,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Mónica的照片) >>>> ::-p-aria(下一张照片)'),
            targetPage.locator('div.Wc\\(\\$transform\\) button.End\\(0\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[2]/div[1]/section/button[2])'),
            targetPage.locator(':scope >>> div.Wc\\(\\$transform\\) button.End\\(0\\)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 17,
                y: 0,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#link-description-651af4ff79b4b8010003ae856878a5d1aa9ff4f697a79763 > div.D\\(f\\) span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"link-description-651af4ff79b4b8010003ae856878a5d1aa9ff4f697a79763\\"]/div[1]/div/span)'),
            targetPage.locator(':scope >>> #link-description-651af4ff79b4b8010003ae856878a5d1aa9ff4f697a79763 > div.D\\(f\\) span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 31,
                y: 19,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria([role=\\"main\\"]) >>>> ::-p-aria(Aithana)'),
            targetPage.locator('div.Ai\\(c\\) > div.D\\(f\\) > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[1]/div/div/div[1]/div[1]/div/div)'),
            targetPage.locator(':scope >>> div.Ai\\(c\\) > div.D\\(f\\) > div > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 18,
                y: 28.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(在 Boost 的帮助下，你于 2025/7/18 与 Aithana 配对。)'),
            targetPage.locator('div.H\\(100\\%\\) > div > div > div > div > div.Fx\\(\\$flx1\\) h1'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[1]/div/div/div[1]/div[1]/h1)'),
            targetPage.locator(':scope >>> div.H\\(100\\%\\) > div > div > div > div > div.Fx\\(\\$flx1\\) h1'),
            targetPage.locator('::-p-text(在 Boost 的帮助下，你于)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 123,
                y: 3,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(下一张照片) >>>> ::-p-aria([role=\\"none\\"])'),
            targetPage.locator('div.BdStart button.End\\(0\\) > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[2]/div/div/div/div[2]/div[1]/span/section/button[2]/svg)'),
            targetPage.locator(':scope >>> div.BdStart button.End\\(0\\) > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 21,
                y: 10,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('aside div.Ta\\(start\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[2]/div/div/div/div/div[2]/div/div[1])'),
            targetPage.locator(':scope >>> aside div.Ta\\(start\\)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13,
                y: 21,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Control');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#\\:rin\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":rin:\\"])'),
            targetPage.locator(':scope >>> #\\:rin\\:')
        ])
            .setTimeout(timeout)
            .click({
              delay: 540.0999999977648,
              offset: {
                x: 73,
                y: 247.5,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Control');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#\\:rin\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":rin:\\"])'),
            targetPage.locator(':scope >>> #\\:rin\\:')
        ])
            .setTimeout(timeout)
            .click({
              delay: 651.6999999992549,
              offset: {
                x: 140,
                y: 281.5,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Control');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Control');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.BdStart > div > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[2]/div/div/div)'),
            targetPage.locator(':scope >>> div.BdStart > div > div > div')
        ])
            .setTimeout(timeout)
            .click({
              delay: 583.3000000007451,
              offset: {
                x: 178,
                y: 69,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('a.CenterAlign > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/div/div/main/div/nav/a[1]/svg)'),
            targetPage.locator(':scope >>> a.CenterAlign > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 10,
                y: 11,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#o1863285868'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1863285868\\"])'),
            targetPage.locator(':scope >>> #o1863285868'),
            targetPage.locator('::-p-text(得到赞BoostAsi优先赞Jacqueline)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 872,
                y: 107,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Lili)'),
            targetPage.locator('li:nth-of-type(3) div.Bgc\\(\\$c-ds-background-primary\\) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1863285868\\"]/ul/li[3]/a/div[1]/div)'),
            targetPage.locator(':scope >>> li:nth-of-type(3) div.Bgc\\(\\$c-ds-background-primary\\) > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 45.308624267578125,
                y: 64.90087890625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 162,
                y: 15,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .fill('Hola! ');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('1');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .fill('Hola! qué');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('e');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .fill('Hola! qué tal');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#link-description-651af4ff79b4b8010003ae856878a5d1aa9ff4f697a79763 > div.D\\(f\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"link-description-651af4ff79b4b8010003ae856878a5d1aa9ff4f697a79763\\"]/div[1])'),
            targetPage.locator(':scope >>> #link-description-651af4ff79b4b8010003ae856878a5d1aa9ff4f697a79763 > div.D\\(f\\)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 117,
                y: 19,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Control');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 145,
                y: 2,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('aside label'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/div/div/div/div/div/div/div[2]/button/span/label)'),
            targetPage.locator(':scope >>> aside label'),
            targetPage.locator('::-p-text(9.1x)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 27.0078125,
                y: 9.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.Pt\\(12px\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2])'),
            targetPage.locator(':scope >>> div.Pt\\(12px\\)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 285,
                y: 29.875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.c9iqosj > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[2]/button/div[2]/div[2]/div)'),
            targetPage.locator(':scope >>> div.c9iqosj > div'),
            targetPage.locator('::-p-text(确定)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 33.1015625,
                y: 21.875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(个人资料照片)'),
            targetPage.locator('nav.D\\(f\\) > a > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/a/div/div)'),
            targetPage.locator(':scope >>> nav.D\\(f\\) > a > div > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 30,
                y: 10.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(返回) >>>> ::-p-aria([role=\\"graphics-symbol\\"])'),
            targetPage.locator('div.Mx\\(12px\\) path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/div[1]/a/svg/g/path)'),
            targetPage.locator(':scope >>> div.Mx\\(12px\\) path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 16.62126922607422,
                y: 13.495845794677734,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              count: 2,
              offset: {
                x: 61.7552490234375,
                y: 47.32244873046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61.8199462890625,
                y: 47.38714599609375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61.8287353515625,
                y: 47.39593505859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61.83184814453125,
                y: 47.3990478515625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61.83251953125,
                y: 47.3997802734375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61.832763671875,
                y: 47.39996337890625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61.832763671875,
                y: 47.39996337890625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61.83282470703125,
                y: 47.4000244140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61.83282470703125,
                y: 47.4000244140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61.83282470703125,
                y: 47.4000244140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61.83282470703125,
                y: 47.4000244140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61.83282470703125,
                y: 47.4000244140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61.83282470703125,
                y: 47.4000244140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61.83282470703125,
                y: 47.4000244140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61.83282470703125,
                y: 47.4000244140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61.83282470703125,
                y: 47.4000244140625,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('ArrowRight');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('ArrowRight');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 54.7518310546875,
                y: 40.31903076171875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              count: 2,
              offset: {
                x: 55.38165283203125,
                y: 40.9488525390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              count: 2,
              offset: {
                x: 61.83282470703125,
                y: 47.4000244140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61.83282470703125,
                y: 47.4000244140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61.83282470703125,
                y: 47.4000244140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61.83282470703125,
                y: 47.4000244140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              count: 2,
              offset: {
                x: 4.4727783203125,
                y: 23.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 4.4727783203125,
                y: 23.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 4.4727783203125,
                y: 23.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 4.4727783203125,
                y: 21.0400390625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              count: 2,
              offset: {
                x: 4.47283935546875,
                y: 17.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#main-content > div.H\\(100\\%\\) > div > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div)'),
            targetPage.locator(':scope >>> #main-content > div.H\\(100\\%\\) > div > div > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 654,
                y: 308,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Control');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(个人资料照片 2)'),
            targetPage.locator('#\\:rl1\\: > div:nth-of-type(2) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"carousel-item-1\\"]/div)'),
            targetPage.locator(':scope >>> #\\:rl1\\: > div:nth-of-type(2) > div')
        ])
            .setTimeout(timeout)
            .click({
              delay: 802.1999999992549,
              offset: {
                x: 296.88677978515625,
                y: 139.89880084991455,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.Wc\\(\\$transform\\) div.D\\(f\\) > button path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[2]/div[2]/button/div/div/div/div/div[1]/button/svg/path)'),
            targetPage.locator(':scope >>> div.Wc\\(\\$transform\\) div.D\\(f\\) > button path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 4.3275146484375,
                y: 19.8275146484375,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Control');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Control');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.notificationManager a > div.Pos\\(r\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[2]/div/a/div[1])'),
            targetPage.locator(':scope >>> div.notificationManager a > div.Pos\\(r\\)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 56,
                y: 29,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(个人资料照片)'),
            targetPage.locator('nav.D\\(f\\) > a > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/a/div/div)'),
            targetPage.locator(':scope >>> nav.D\\(f\\) > a > div > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 27,
                y: 20.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 28.6600341796875,
                y: 7.227294921875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 32.83282470703125,
                y: 11.4000244140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper')
        ])
            .setTimeout(timeout)
            .click({
              count: 2,
              offset: {
                x: 32.83282470703125,
                y: 11.4000244140625,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'chrome-extension://hlkenndednhfkekhgcdicdfddnkalmdm/interface/devtools/cookie-list.html', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Export[role=\\"button\\"]) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('#export-cookies > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"export-cookies\\"]/div)'),
            targetPage.locator(':scope >>> #export-cookies > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 99.19268798828125,
                y: 4.5572509765625,
              },
            });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'chrome-extension://hlkenndednhfkekhgcdicdfddnkalmdm/interface/devtools/cookie-list.html', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(JSON)'),
            targetPage.locator('#export-json'),
            targetPage.locator('::-p-xpath(//*[@id=\\"export-json\\"])'),
            targetPage.locator(':scope >>> #export-json'),
            targetPage.locator('::-p-text(JSON)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 45.5399169921875,
                y: 17.88714599609375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Yaiza的照片) >>>> ::-p-aria(个人资料照片 1)'),
            targetPage.locator('div.Wc\\(\\$transform\\) section div:nth-of-type(1) > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"carousel-item-0\\"]/div)'),
            targetPage.locator(':scope >>> div.Wc\\(\\$transform\\) section div:nth-of-type(1) > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 174.5,
                y: 223,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 20.47210693359375,
                y: 20.05938720703125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              count: 2,
              offset: {
                x: 20.47283935546875,
                y: 20.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 20.47283935546875,
                y: 20.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 20.47283935546875,
                y: 20.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 20.47283935546875,
                y: 20.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 20.47283935546875,
                y: 20.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              count: 2,
              offset: {
                x: 28.47283935546875,
                y: 13.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 28.47283935546875,
                y: 13.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(个人资料照片)'),
            targetPage.locator('nav > a > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav/a/div/div)'),
            targetPage.locator(':scope >>> nav > a > div > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 28,
                y: 20.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('button:nth-of-type(1) path:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/div[2]/button[1]/svg/g/path[2])'),
            targetPage.locator(':scope >>> button:nth-of-type(1) path:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 0.1666717529296875,
                y: 4.4958343505859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#o787701392 div.c9iqosj > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o787701392\\"]/div/div/div[1]/button/div[2]/div[2]/div)'),
            targetPage.locator(':scope >>> #o787701392 div.c9iqosj > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 30.203125,
                y: 8.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(导航栏)'),
            targetPage.locator('nav.D\\(f\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1])'),
            targetPage.locator(':scope >>> nav.D\\(f\\)'),
            targetPage.locator('::-p-text(返回Boost9.3x探索工作模式安全工具包)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 8,
                y: 42,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(返回) >>>> ::-p-aria([role=\\"graphics-symbol\\"])'),
            targetPage.locator('div.Mx\\(12px\\) path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/nav[1]/div[1]/a/svg/g/path)'),
            targetPage.locator(':scope >>> div.Mx\\(12px\\) path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 3.6241416931152344,
                y: 11.49913215637207,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.Px\\(20px\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o-1778884828\\"]/div/div[1]/div/aside/div/div/div/div/div/div[2])'),
            targetPage.locator(':scope >>> div.Px\\(20px\\)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 98,
                y: 5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(消息)'),
            targetPage.locator('#o775463182'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o775463182\\"])'),
            targetPage.locator(':scope >>> #o775463182'),
            targetPage.locator('::-p-text(消息)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 25.796875,
                y: 12,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#link-description-675c6e4926cb570f0304dbf56878a5d1aa9ff4f697a79763 > div.D\\(f\\) span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"link-description-675c6e4926cb570f0304dbf56878a5d1aa9ff4f697a79763\\"]/div[1]/div/span)'),
            targetPage.locator(':scope >>> #link-description-675c6e4926cb570f0304dbf56878a5d1aa9ff4f697a79763 > div.D\\(f\\) span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13,
                y: 7,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 108,
                y: 10,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .fill('ahì');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('i');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .fill('ahì vamos');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .fill('estas en usera?');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 74,
                y: 14,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .fill('[\n    {\n        "domain": "tinder.com",\n        "expirationDate": 1753451810.149193,\n        "hostOnly": true,\n        "httpOnly": false,\n        "name": "AWSALBCORS",\n        "path": "/",\n        "sameSite": "no_restriction",\n        "secure": true,\n        "session": false,\n        "storeId": null,\n        "value": "V4brrUttuKuMnP3cWJ2Jr2uYygVmyOpur+k46vvWpsyyYahnnLUzo1o3HbqtmHO3NnS26sG/IxxgTXTtEq5xxubHccRFcYLzwNsJ71qDXl8LMi+GtRUZZYvHMZj3"\n    },\n    {\n        "domain": ".tinder.com",\n        "expirationDate": 1787408337.664429,\n        "hostOnly": false,\n        "httpOnly": false,\n        "name": "_ga_CDPT3R4PG7",\n        "path": "/",\n        "sameSite": null,\n        "secure": false,\n        "session": false,\n        "storeId": null,\n        "value": "GS2.1.s1752846987$o1$g1$t1752848337$j58$l0$h0"\n    },\n    {\n        "domain": ".tinder.com",\n        "expirationDate": 1752933578,\n        "hostOnly": false,\n        "httpOnly": false,\n        "name": "_gid",\n        "path": "/",\n        "sameSite": null,\n        "secure": false,\n        "session": false,\n        "storeId": null,\n        "value": "GA1.2.710333626.1752846987"\n    },\n    {\n        "domain": "tinder.com",\n        "expirationDate": 1753451809.776144,\n        "hostOnly": true,\n        "httpOnly": false,\n        "name": "lang",\n        "path": "/",\n        "sameSite": null,\n        "secure": false,\n        "session": false,\n        "storeId": null,\n        "value": "en"\n    },\n    {\n        "domain": ".tinder.com",\n        "expirationDate": 1752848506,\n        "hostOnly": false,\n        "httpOnly": false,\n        "name": "_gat_gtag_UA_60214108_5",\n        "path": "/",\n        "sameSite": null,\n        "secure": false,\n        "session": false,\n        "storeId": null,\n        "value": "1"\n    },\n    {\n        "domain": ".tinder.com",\n        "expirationDate": 1787407178.584604,\n        "hostOnly": false,\n        "httpOnly": false,\n        "name": "_ga",\n        "path": "/",\n        "sameSite": null,\n        "secure": false,\n        "session": false,\n        "storeId": null,\n        "value": "GA1.1.1597859611.1752846987"\n    },\n    {\n        "domain": ".tinder.com",\n        "expirationDate": 1760622987,\n        "hostOnly": false,\n        "httpOnly": false,\n        "name": "_gcl_au",\n        "path": "/",\n        "sameSite": null,\n        "secure": false,\n        "session": false,\n        "storeId": null,\n        "value": "1.1.1718873042.1752846987"\n    },\n    {\n        "domain": "tinder.com",\n        "expirationDate": 1753451810.149136,\n        "hostOnly": true,\n        "httpOnly": false,\n        "name": "AWSALB",\n        "path": "/",\n        "sameSite": null,\n        "secure": false,\n        "session": false,\n        "storeId": null,\n        "value": "V4brrUttuKuMnP3cWJ2Jr2uYygVmyOpur+k46vvWpsyyYahnnLUzo1o3HbqtmHO3NnS26sG/IxxgTXTtEq5xxubHccRFcYLzwNsJ71qDXl8LMi+GtRUZZYvHMZj3"\n    }\n]');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 94,
                y: 54,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 151,
                y: 42,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(键入一条消息)'),
            targetPage.locator('#o1224954181'),
            targetPage.locator('::-p-xpath(//*[@id=\\"o1224954181\\"])'),
            targetPage.locator(':scope >>> #o1224954181')
        ])
            .setTimeout(timeout)
            .fill('[\n    {\n        "domain": "tinder.com",\n        "expirationDate": 1753451810.149193,\n        "hostOnly": true,\n        "httpOnly": false,\n        "name": "AWSALBCORS",\n        "path": "/",\n        "sameSite": "no_restriction",\n        "secure": true,\n        "session": false,\n        "storeId": null,\n        "value": "V4brrUttuKuMnP3cWJ2Jr2uYygVmyOpur+k46vvWpsyyYahnnLUzo1o3HbqtmHO3NnS26sG/IxxgTXTtEq5xxubHccRFcYLzwNsJ71qDXl8LMi+GtRUZZYvHMZj3"\n    },\n    {\n        "domain": ".tinder.com",\n        "expirationDate": 1787408337.664429,\n        "hostOnly": false,\n        "httpOnly": false,\n        "name": "_ga_CDPT3R4PG7",\n        "path": "/",\n        "sameSite": null,\n        "secure": false,\n        "session": false,\n        "storeId": null,\n        "value": "GS2.1.s1752846987$o1$g1$t1752848337$j58$l0$h0"\n    },\n    {\n        "domain": ".tinder.com",\n        "expirationDate": 1752933578,\n        "hostOnly": false,\n        "httpOnly": false,\n        "name": "_gid",\n        "path": "/",\n        "sameSite": null,\n        "secure": false,\n        "session": false,\n        "storeId": null,\n        "value": "GA1.2.710333626.1752846987"\n    },\n    {\n        "domain": "tinder.com",\n        "expirationDate": 1753451809.776144,\n        "hostOnly": true,\n        "httpOnly": false,\n        "name": "lang",\n        "path": "/",\n        "sameSite": null,\n        "secure": false,\n        "session": false,\n        "storeId": null,\n        "value": "en"\n    },\n    {\n        "domain": ".tinder.com",\n        "expirationDate": 1752848506,\n        "hostOnly": false,\n        "httpOnly": false,\n        "name": "_gat_gtag_UA_60214108_5",\n        "path": "/",\n        "sameSite": null,\n        "secure": false,\n        "session": false,\n        "storeId": null,\n        "value": "1"\n    },\n    {\n        "domain": ".tinder.com",\n        "expirationDate": 1787407178.584604,\n        "hostOnly": false,\n        "httpOnly": false,\n        "name": "_ga",\n        "path": "/",\n        "sameSite": null,\n        "secure": false,\n        "session": false,\n        "storeId": null,\n        "value": "GA1.1.1597859611.1752846987"\n    },\n    {\n        "domain": ".tinder.com",\n        "expirationDate": 1760622987,\n        "hostOnly": false,\n        "httpOnly": false,\n        "name": "_gcl_au",\n        "path": "/",\n        "sameSite": null,\n        "secure": false,\n        "session": false,\n        "storeId": null,\n        "value": "1.1.1718873042.1752846987"\n    },\n    {\n        "domain": "tinder.com",\n        "expirationDate": 1753451810.149136,\n        "hostOnly": true,\n        "httpOnly": false,\n        "name": "AWSALB",\n        "path": "/",\n        "sameSite": null,\n        "secure": false,\n        "session": false,\n        "storeId": null,\n        "value": "V4brrUttuKuMnP3cWJ2Jr2uYygVmyOpur+k46vvWpsyyYahnnLUzo1o3HbqtmHO3NnS26sG/IxxgTXTtEq5xxubHccRFcYLzwNsJ71qDXl8LMi+GtRUZZYvHMZj3"\n    }\n]');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('a');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Meta');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Control');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(返回) >>>> ::-p-aria([role=\\"image\\"])'),
            targetPage.locator('#main-content a.Bdrs\\(50\\%\\) svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div/div[1]/div/div/div[1]/a[2]/div/svg)'),
            targetPage.locator(':scope >>> #main-content a.Bdrs\\(50\\%\\) svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 10,
                y: 12,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span.gamepad-icon-wrapper path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5]/div/div[4]/button/span/span[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span.gamepad-icon-wrapper path')
        ])
            .setTimeout(timeout)
            .click({
              count: 2,
              offset: {
                x: 22.47283935546875,
                y: 21.05999755859375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#main-content > div.H\\(100\\%\\) > div > div > div > div.Pos\\(r\\) > div > div > div.B\\(0\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5])'),
            targetPage.locator(':scope >>> #main-content > div.H\\(100\\%\\) > div > div > div > div.Pos\\(r\\) > div > div > div.B\\(0\\)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 6.5,
                y: 51.20001220703125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#main-content > div.H\\(100\\%\\) > div > div > div > div.Pos\\(r\\) > div > div > div.B\\(0\\)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[5])'),
            targetPage.locator(':scope >>> #main-content > div.H\\(100\\%\\) > div > div > div > div.Pos\\(r\\) > div > div > div.B\\(0\\)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 12.5,
                y: 51.20001220703125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.Wc\\(\\$transform\\) button.End\\(0\\) > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[2]/div[1]/section/button[2]/svg)'),
            targetPage.locator(':scope >>> div.Wc\\(\\$transform\\) button.End\\(0\\) > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 19.5,
                y: 2,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.Wc\\(\\$transform\\) button.End\\(0\\) > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main-content\\"]/div[1]/div/div/div/div[1]/div/div/div[2]/div[1]/section/button[2]/svg)'),
            targetPage.locator(':scope >>> div.Wc\\(\\$transform\\) button.End\\(0\\) > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 19.5,
                y: 2,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Control');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Control');
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});

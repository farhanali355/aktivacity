import puppeteer from 'puppeteer';

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
        
        // Let's get the status of the sections
        const data = await page.evaluate(() => {
            const getInfo = (selector) => {
                const el = document.querySelector(selector);
                if (!el) return 'Missing';
                const rect = el.getBoundingClientRect();
                const computed = window.getComputedStyle(el);
                return `Exists. Size: ${rect.width}x${rect.height}, Opacity: ${computed.opacity}, Display: ${computed.display}`;
            };
            return {
                hero: getInfo('.hero-section-simple'),
                intro: getInfo('.intro-section'),
                service: getInfo('.service-section'),
                watch: getInfo('.watch-version01'),
                testimonial: getInfo('.testimonial-section'),
                bodyText: document.body.innerText.substring(0, 100) // just to see first 100 chars
            };
        });
        
        console.log(JSON.stringify(data, null, 2));

        // Let's also check for client-side console errors
        page.on('console', msg => {
            if (msg.type() === 'error') console.log('BROWSER ERROR:', msg.text());
        });
        
        await browser.close();
    } catch (e) {
        console.error("Puppeteer error:", e);
    }
})();

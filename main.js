const puppeteer = require('puppeteer');

const hnCookie = {
    name: 'user',
    value: 'cookievaluegoeshere!',
    domain: 'news.ycombinator.com',
    path: '/',
    expires: 1580428800, //need to set expiry time - this should be calculated rather than hardcoded.
    httpOnly: true,
    secure: true,
};

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setCookie(hnCookie);
    await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
    await page.pdf({path: 'hn.pdf', format: 'A4'});
    await browser.close();
})();

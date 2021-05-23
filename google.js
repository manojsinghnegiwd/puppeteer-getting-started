const puppeteer = require('puppeteer');

const googleSearch = async () => {
    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();

    await page.viewport({
        width: 1920,
        height: 1080
    })

    await page.goto("https://www.google.com")
    await page.type('[aria-label="Search"]', "steve jobs")

    const element = await page.$('[aria-label="Search"]')
    await element.press('Enter');
    await page.waitForNavigation({ waitUntil: "networkidle2" })

    await Promise.all([
        page.click("a > h3"),
        page.waitForNavigation({ waitUntil: "networkidle2" })
    ])

    await page.screenshot({ path: "firstLink.png", fullPage: true })
    await browser.close();
}

googleSearch();

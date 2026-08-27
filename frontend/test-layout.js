const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3001');
  await page.waitForTimeout(5000); // wait for splash
  
  const layoutInfo = await page.evaluate(() => {
    const main = document.querySelector('main');
    const h1 = document.querySelector('h1');
    const nav = document.querySelector('header');
    return {
      main: main ? main.getBoundingClientRect() : null,
      h1: h1 ? h1.getBoundingClientRect() : null,
      nav: nav ? nav.getBoundingClientRect() : null,
      mainStyles: main ? window.getComputedStyle(main).justifyContent : null
    };
  });
  console.log(JSON.stringify(layoutInfo, null, 2));
  await browser.close();
})();

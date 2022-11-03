//imports
const puppeteer = require("puppeteer");

//define constants
const URL = "https://scp-wiki.wikidot.com/scp-series";
const scrape = function () {
  (async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 25,
      args: ["--start-maximized"],
      defaultViewport: null,
    }); //launch a browser with puppeteer
    const page = await browser.newPage(); //create a new tab
    
    await page.goto(URL); // go to https://scp-wiki.wikidot.com/scp-series
   
  })();

  function sleep(ms) {
    // function to sleep so that page elements can properly load before being interacted with.
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
};
scrape();

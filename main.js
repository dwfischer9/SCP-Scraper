//imports
const puppeteer = require("puppeteer");

//define constants
const URL = "https://scp-wiki.wikidot.com/scp-series";
const scrape = function () {
  (async () => {
    const browser = await puppeteer.launch({
      headless: true,
      slowMo: 25,
      //args: [""],
      defaultViewport: null,
    }); //launch a browser with puppeteer
    const page = await browser.newPage(); //create a new tab
    var j = 0;
    await page.goto(URL); // go to https://scp-wiki.wikidot.com/scp-series
   var links =await page.$$eval('h1 + ul > li > a', anchors => [].map.call(anchors, a => a.href));
   for(var i = 1; i <  links.length - 1;i++){
      await page.goto(links[i]);
      
      await page.screenshot({
        path: ('screenshots/scp'+ j++ + '.jpeg'),
        fullPage : 'true'
      });
      sleep(1000/6);
      await page.goBack();
   }
    // await page.goto(link);
   await page.close();
   await browser.close();
   }
  )();

  function sleep(ms) {
    // function to sleep so that page elements can properly load before being interacted with.
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
};
scrape();

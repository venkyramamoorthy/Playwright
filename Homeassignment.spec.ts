import { chromium,firefox, test } from "@playwright/test";

test("To launch a browser", async () => {

const chromeInstance = await chromium.launch({ headless:false, channel:
"msedge" });

const browserContext = await chromeInstance.newContext();

const pagecontext = await browserContext.newPage();

await pagecontext.goto("http://www.redbus.in");

console.log(`The title of the page is ${await pagecontext.title()}`)

console.log(`The page url is ${pagecontext.url()}`)



const firefoxInstance = await firefox.launch({headless:false});

const firefoxContext = await firefoxInstance.newContext();

const firefoxPage = await firefoxContext.newPage();

await firefoxPage.goto("https://www.flipkart.com/");

console.log(`The title of the page is ${await firefoxPage.title()}`)

console.log(`The page url is ${firefoxPage.url()}`)


});




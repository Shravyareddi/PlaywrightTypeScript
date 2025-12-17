//Import playwright module
import {test,expect} from '@playwright/test'
//write a test
test("Screenshoots",async({page})=>
{

//Go to URL
  await page.goto('https://www.att.com/');

  //Element screenshot
  await page.locator('#background-background').screenshot({path:'./screenshots/ElementScreenshot.png'});
//page screenshot
  await page.screenshot({path:'./screenshots/PageScreenshot.png'});
  //Full apgescreenshot
await page.screenshot({path:'./screenshots/FullPageScreenshot.png',fullPage:true});
});
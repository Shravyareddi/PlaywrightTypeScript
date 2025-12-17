//Import playwright module
import {test,expect} from '@playwright/test'
//write a test
test("Mouse actions",async({page})=>
{

//Go to URL
  await page.goto('https://www.att.com/');
  //await page.getByLabel('Check out phones and devices').first().click({button:'left'});
  //await page.getByLabel('Check out phones and devices').first().click({button:'middle'});
  //await page.getByLabel('Check out phones and devices').first().click({button:'right'});
  // await page.locator("[id='z1_profile_button']").hover();
  await page.locator("[id='z1_profile_button']").dblclick;
});
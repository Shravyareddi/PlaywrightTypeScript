//Import playwright module
import {test,expect} from '@playwright/test'
//write a test
test("Get Text & Get attribute value in playwright",async({page})=>
{

//Go to URL

  await page.goto('https://www.demoblaze.com/');
  //const name=await page.locator('[id="nava"]').textContent();
  const name=await page.locator('[id="nava"]').innerText();
  const finalname=name?.trim();
  console.log(`Name is:${finalname}`);
  expect(finalname).toBe("PRODUCT STORE");
  const classAttri=await page.locator('#cat').getAttribute('class');
  console.log(`Attribute value:${classAttri}`);
});
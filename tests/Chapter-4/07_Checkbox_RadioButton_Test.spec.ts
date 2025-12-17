//Import playwright module
import {test,expect} from '@playwright/test'
//write a test
test("Working wit checkbox and radio button in playwright",async({page})=>
{

//Go to URL

  await page.goto('https://jqueryui.com/checkboxradio/');
  const iframe=page.frameLocator('.demo-frame');
  //radio button checked
  await expect(iframe.locator('label[for="radio-1"]')).not.toBeChecked();
  await iframe.locator('label[for="radio-1"]').check();
  await expect(iframe.locator('label[for="radio-1"]')).toBeChecked();
  //checkbox checked
  await expect(iframe.locator('label[for="checkbox-1"]')).not.toBeChecked();
  await iframe.locator('label[for="checkbox-1"]').check();
  await expect(iframe.locator('label[for="radio-1"]')).toBeChecked();

});
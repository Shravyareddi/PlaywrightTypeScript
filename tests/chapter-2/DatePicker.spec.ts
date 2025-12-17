//Import playwright module
import {test,expect} from '@playwright/test'
//write a test
test("Selecting date value in playwright",async({page})=>
{
//
//Go to URL

  await page.goto('https://jqueryui.com/datepicker/');
  //Hardcoded date
  const iframe =page.frameLocator('[class="demo-frame"]');
  //await iframe.locator('[id="datepicker"]').fill('12/15/2025');

  //selecting dynamic date
  await iframe.locator('[id="datepicker"]').click();
  await iframe.locator('.ui-datepicker-today').click();

  //selectin past date
   await iframe.locator('[id="datepicker"]').click();
   await iframe.locator('.ui-datepicker-prev').click();
   await iframe.locator('text="3"').click();

    //selectin future  date
    await iframe.locator('[id="datepicker"]').click();
   await iframe.locator('.ui-datepicker-next').click();
   await iframe.locator('text="20"').click();


});
//Import playwright module
import {test,expect} from '@playwright/test'
import { Console } from 'console';
//write a test
test("Timeouts in Playwright",async({page})=>
{
    test.setTimeout(1*60*1000);

//Go to URL

  await page.goto('https://www.saucedemo.com');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button typescript"]').click({timeout:5000});
  await expect(page).toHaveTitle('Swag Labs typescript',{timeout:5000});
  //await page.waitForTimeout(60000);
});
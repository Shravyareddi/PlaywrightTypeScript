//Import playwright module
import {test,expect} from '@playwright/test'
import { Console } from 'console';
//write a test
test("Execute_SameTc_Multiple",async({page})=>
{

//Go to URL

  await page.goto('https://www.saucedemo.com');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveTitle('Swag Labs');
});
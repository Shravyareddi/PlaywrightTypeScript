//Import playwright module
import {test,expect} from '@playwright/test'
//write a test
//rerun failed tc by npx playwright test --last-failed
test("Test1",async({page})=>
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

//write a test
test("Test2",async({page})=>
{
expect(true).toBe(true);

});

//write a test
test("Test3",async({page})=>
{

//Go to URL
expect(true).toBe(true);
});
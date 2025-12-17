//Import playwright module
import {test,expect} from '@playwright/test'
//write a test
test("Verifying the title1",{tag : ['@SmokeTesting']},async({page})=>
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
test("Verifying the title2",{tag : ['@SmokeTesting','@RegressionTesting','@Sanity']},async({page})=>
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
test("Verifying the title3",{tag : ['@RegressionTesting']},async({page})=>
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
//Import playwright module
import {test,expect} from '@playwright/test'
//write a test
test('Test 1',async({page})=>{
    //Go to URL
  await page.goto('https://www.saucedemo.com');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret');
  await page.locator('[data-test="login-button"]').click();
  const errorMessage = page.getByText(
  'Username and password do not match any user in this service'
  );
  await expect(errorMessage).toBeVisible();
  });

//write a test
//skip will skip that testcase
/*test.skip('Test 2',async({page})=>{
    //Go to URL
  await page.goto('https://www.saucedemo.com');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret');
  await page.locator('[data-test="login-button"]').click();
  const errorMessage = page.getByText(
  'Username and password do not match any user in this service'
  );
  await expect(errorMessage).toBeVisible();
  });*/
test('Test 2',async({page})=>{
    //Go to URL
  await page.goto('https://www.saucedemo.com');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret');
  await page.locator('[data-test="login-button"]').click();
  const errorMessage = page.getByText(
  'Username and password do not match any user in this service'
  );
  await expect(errorMessage).toBeVisible();
  });
//selected testcase will execute by only
test.only('Test 3',async({page})=>{
    //Go to URL
  await page.goto('https://www.saucedemo.com');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret');
  await page.locator('[data-test="login-button"]').click();
  const errorMessage = page.getByText(
  'Username and password do not match any user in this service'
  );
  await expect(errorMessage).toBeVisible();
  });
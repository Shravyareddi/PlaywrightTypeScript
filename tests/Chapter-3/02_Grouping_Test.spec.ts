//Import playwright module
import {test,expect} from '@playwright/test'

test.describe('SmokeTesting', ()=>{
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
  })
});

test.describe('RegressionTesting', ()=>{
  //write a test
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
  })
  //write a test
test('Test 3',async({page})=>{
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
  })
});
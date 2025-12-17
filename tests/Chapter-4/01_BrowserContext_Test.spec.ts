//Import playwright module
import { test, expect } from '@playwright/test';

test('Multiple browser/tabs in Playwright TypeScript', async ({ browser }) => {

  // First browser session
  const context = await browser.newContext();
  const page1 = await context.newPage();

  await page1.goto('https://www.saucedemo.com');
  await page1.locator('[data-test="username"]').fill('standard_user');
  await page1.locator('[data-test="password"]').fill('secret_sauce');
  await page1.locator('[data-test="login-button"]').click();
  await expect(page1).toHaveTitle('Swag Labs');

  // Second browser session
  //const context2 = await browser.newContext();
  const page2 = await context.newPage();

  await page2.goto('https://www.saucedemo.com');
  await page2.locator('[data-test="username"]').fill('standard_user');
  await page2.locator('[data-test="password"]').fill('secret_sauce');
  await page2.locator('[data-test="login-button"]').click();
  await expect(page2).toHaveTitle('Swag Labs');

  // Close contexts (optional)
  await context.close();
  //await context2.close();
});
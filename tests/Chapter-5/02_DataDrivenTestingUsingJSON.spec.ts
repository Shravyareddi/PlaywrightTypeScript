//Import playwright module
import {test,expect} from '@playwright/test'
import testData from '../../test-data/qa/testdata.json';

const Password = process.env.SAUCE_PASSWORD!;

testData.forEach(data => {
  test(`Login test for: ${data.username}`, async ({ page }) => {

//Go to URL

  await page.goto('https://www.saucedemo.com');
  await page.locator('[data-test="username"]').fill(data.username);
  await page.locator('[data-test="password"]').fill(Password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveTitle('Swag Labs');
});

});
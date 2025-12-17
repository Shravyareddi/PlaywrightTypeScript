//Import playwright module
import {test,expect} from '@playwright/test'
//write a test


//Go to URL
const users= ['standard_user','problem_user','performance_glitch_user','visual_user']
for(const user of users){
  test(`Parameterize test in playwright ${user}`,async({page})=>
{
  await page.goto('https://www.saucedemo.com');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(user);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveTitle('Swag Labs');
});
}
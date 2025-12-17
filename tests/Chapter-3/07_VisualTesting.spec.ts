//Import playwright module
import {test,expect} from '@playwright/test'
import { Console } from 'console';
//write a test
test("Visual Comparison in playwright",async({page})=>
{

//Go to URL

  await page.goto('https://www.saucedemo.com');
  await expect(page).toHaveScreenshot('Swag_LabsLogin.png');
  await page.getByPlaceholder('Username').fill('standard_user');
  await expect(page).toHaveScreenshot('Swag_LabsLogin.png');
})

test("Element Visual Comparison in playwright",async({page})=>
{

//Go to URL

  await page.goto('https://www.saucedemo.com');
  await expect(page).toHaveScreenshot('Swag_LabsLogin.png');
  const element=page.locator('[id="login_button_container"]');
  await expect(element).toHaveScreenshot('Swag_LabsLoginForm.png');
  await page.getByPlaceholder('Username').fill('standard_user');
  await expect(element).toHaveScreenshot('Swag_LabsLoginForm.png');
})
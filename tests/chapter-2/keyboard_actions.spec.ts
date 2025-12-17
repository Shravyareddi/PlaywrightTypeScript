//Import playwright module
import {test,expect} from '@playwright/test'
//write a test
test("Keyboard_actions",async({page})=>
{
//
//Go to URL
//Enter,Type,TAB actions from keyboard
  await page.goto('https://www.saucedemo.com/');
   await page.keyboard.press('Tab');
  await page.getByPlaceholder('Username').click();
   //await page.getByPlaceholder('Username').fill('standard_user');
   await page.keyboard.type('standard_user');
   //await page.getByPlaceholder('Password').click();
   await page.keyboard.press('Tab');
   //await page.getByPlaceholder('Password').fill('secret_sauce');
   await page.keyboard.type('standard_user');
   //await page.keyboard.press('Enter');

   //selecting and deleting from keyboard
 await page.keyboard.press('Control+A');
 await page.keyboard.press('Delete');
});
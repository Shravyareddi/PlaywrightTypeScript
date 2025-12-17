//Import playwright module
import {test,expect} from '@playwright/test'
//write a test
test("Soft_Assertions in playwright",async({page})=>
{
//
//Go to URL

  await page.goto('https://www.youtube.com/');

  //visible,editable,enabled,empty
  await expect(page.getByPlaceholder('Search')).toBeVisible();
  await expect(page.getByPlaceholder('Search')).toBeEditable();
  await expect(page.getByPlaceholder('Search')).toBeEnabled();
  await expect(page.getByPlaceholder('Search')).toBeEmpty();

//Verify URL,title,text,count
await page.getByPlaceholder('Search').click();
await page.getByPlaceholder('Search').fill('playwright tester talk');
await page.getByPlaceholder('Search').press('Enter');
await expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+tester+talk');
await expect.soft(page).toHaveTitle('playwright typescript tester talk - YouTube');
await expect(page.locator('span[id="title"]').first()).toHaveText('People also watched');
await expect(page.locator('span[id="title"]')).toHaveCount(1);
//await expect(page.getByPlaceholder('Search')).toBeDisabled();
});
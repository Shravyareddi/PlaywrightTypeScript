//Import playwright module
import {test,expect} from '@playwright/test'
//write a test
test("Handling dropdownlist",async({page})=>
{

//Go to URL
  await page.goto('https://www.facebook.com/');
  await page.getByRole('button',{name:'Create new account'}).click();
//select dropdown by value
  await page.getByLabel('Month').selectOption('10');

//select dropdown using visible text
  await page.getByLabel('Month').selectOption({ label: 'Sep' });
  //validate all the options
  await expect(page.locator('#month > option')).toHaveText(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);
});


//Import playwright module
import {test,expect} from '@playwright/test'
//write a test
test("Locators in Playwright",async({page})=>
{

//Go to URL
  await page.goto('');
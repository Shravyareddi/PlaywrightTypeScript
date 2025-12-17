//Import playwright module
import {test,expect} from '@playwright/test'
//write a test
test("Screenshoots",async({page})=>
{

//Go to URL
  await page.goto('https://jqueryui.com/droppable/');
  const iframe=page.frameLocator('[class="demo-frame"]');
  const dragElement=iframe.locator('[id="draggable"]');
  const dropElement=iframe.locator('[id="droppable"]');
  await dragElement.dragTo(dropElement);
});
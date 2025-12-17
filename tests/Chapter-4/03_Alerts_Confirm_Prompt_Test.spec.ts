import { test, expect } from '@playwright/test';

test("Handling Alert popups Playwright", async ({ page }) => {

  // Go to URL
  await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_alert');

  // Handle alert
    page.once('dialog', dialog => {
    console.log("Alert text:", dialog.message());
    dialog.accept();
  });

  // Click button inside iframe
  await page.frameLocator('#iframeResult').getByRole('button', { name: 'Try it' }).click();

});
  test("confirm popups Playwright", async ({ page }) => {

  // Go to URL
  await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');

  // Handle confirm
    page.once('dialog', dialog => {
    console.log("confirm text:", dialog.message());
    dialog.accept();
  });

  // Click button inside iframe
  await page.frameLocator('#iframeResult').getByRole('button', { name: 'Try it' }).click();
});

test("prompt popups Playwright", async ({ page }) => {

  // Go to URL
  await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt');

  // Handle prompt
   page.once('dialog', async dialog => {
    console.log("Prompt text:", dialog.message());
    await dialog.accept("Harry Potter");   // enter text + OK
})

  // Click button inside iframe
  await page.frameLocator('#iframeResult').getByRole('button', { name: 'Try it' }).click();
});
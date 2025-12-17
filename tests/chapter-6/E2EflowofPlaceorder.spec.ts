import { test, expect } from './CustomSwagFixture';
import testData from '../../test-data/qa/testdata.json';

const Password = process.env.SAUCE_PASSWORD!;

//testData.forEach(data => {
for (const username of testData.username) {
  test(`Full e2e flow: ${username}`, async ({page,loginPage,plpPage,cartPg,checkoutPg}) => {

    await page.goto(process.env.Saucedemo_url!);
    await loginPage.login(username, Password);
    await plpPage.PLP();
    await cartPg.cart();
    await checkoutPg.checkout('John', 'Doe', '500081');

    await expect(checkoutPg.Text)
      .toHaveText('Thank you for your order!');
  });
}
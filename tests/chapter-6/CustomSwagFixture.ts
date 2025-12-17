import { test as base, expect } from '@playwright/test';
import { LoginswagPages } from '../../src/Pages/LoginswagPages';
import { PLPswagPages } from '../../src/Pages/PLPswagPages';
import { cartPage } from '../../src/Pages/cartPage';
import { CheckoutPage } from '../../src/Pages/CheckoutPage';


type Fixtures = {
  loginPage: LoginswagPages;
  plpPage: PLPswagPages;
  cartPg: cartPage;
  checkoutPg: CheckoutPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginswagPages(page));
  },
  plpPage: async ({ page }, use) => {
    await use(new PLPswagPages(page));
  },
  cartPg: async ({ page }, use) => {
    await use(new cartPage(page));
  },
  checkoutPg: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
});

export { expect };
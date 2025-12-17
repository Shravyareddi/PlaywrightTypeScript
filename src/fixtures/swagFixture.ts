import { test as base, expect } from '@playwright/test';
import { LoginswagPages } from '../Pages/LoginswagPages';
import { PLPswagPages } from '../Pages/PLPswagPages';
import { cartPage } from '../Pages/cartPage';
import { CheckoutPage } from '../Pages/CheckoutPage';

//Extend base test with your page objects
export const test=base.extend<{
    loginPage:LoginswagPages;
    plpPage:PLPswagPages;
    cartPg:cartPage;
    checkoutPg:CheckoutPage;
}>({

    loginPage:async({page},use)=>{
    
        await use(new LoginswagPages(page));

    },
    plpPage:async({page},use)=>{
    
        await use(new PLPswagPages(page));
        
    },
    cartPg:async({page},use)=>{
    
        await use(new cartPage(page));
        
    },
    checkoutPg:async({page},use)=>{
    
        await use(new CheckoutPage(page));
        
    },
});

export{expect};
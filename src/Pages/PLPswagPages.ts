import { Page } from '@playwright/test';
export class PLPswagPages{

    private button;
    private cartIcon;


    constructor(private page:Page){
        this.button=page.getByRole('button',{name:'Add to cart'}).first();
        this.cartIcon=page.locator('.shopping_cart_link');

    }

    async PLP(){
        await this.button.click();
        await this.cartIcon.click();
    }
}
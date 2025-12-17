import { Page } from '@playwright/test';
export class cartPage{
private cartCount;
private Continuebtn;

constructor(private page:Page){
   this.cartCount = page.getByTestId('shopping-cart-badge');
   this.Continuebtn=page.locator('#checkout');
    
}
async cart(){
    await this.cartCount.isVisible();
    await this.Continuebtn.click();
}
}
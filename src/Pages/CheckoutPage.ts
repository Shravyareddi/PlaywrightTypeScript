import { Page } from '@playwright/test';
export class CheckoutPage{
    private FN;
    private LN;
    private Zip;
    private continue;
    private Fbtn;
     Text;

    constructor(private page:Page){
      this.FN= page.getByPlaceholder('First Name');
      this.LN= page.getByPlaceholder('Last Name');
      this.Zip= page.getByPlaceholder('Zip/Postal Code');
      this.continue=page.locator('#continue');
      //this.con=page.getByTestId('continue')
      this.Fbtn=page.getByRole('button',{name:'Finish'});
      
      this.Text=page.locator('.complete-header');
    }

    async checkout(FN:string,LN:string,Zip:string){
        await this.FN.fill(FN);
        await this.LN.fill(LN);
        await this.Zip.fill(Zip);
        await this.continue.click();
        await this.Fbtn.click();

    }
}
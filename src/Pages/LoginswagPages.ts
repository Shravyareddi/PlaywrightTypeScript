import { Page } from '@playwright/test';
export class LoginswagPages{

  private username;
  private password;
  private loginBtn;

constructor(private page:Page){//page is variable which holds the playwright page objects
    
        //Elements
  this.username=page.getByPlaceholder('Username');
  this.password=page.getByPlaceholder('Password');
  this.loginBtn=page.locator('#login-button');
    }

    //Methods
async login(username: string, Password: string) {
await this.username.fill(username);
await this.password.fill(Password);
await this.loginBtn.click();

}
}
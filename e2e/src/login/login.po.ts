import { browser, by, element } from 'protractor';

export class LoginPage {
  
    private credentials = {
        username: 'username',
        password: 'username'
      };

      navigateTo() {
        return browser.get('/login');
      }

      fillCredentials(credentias: any = this.credentials) {
        element(by.formControlName('username')).sendKeys(credentias.username);
        element(by.formControlName('password')).sendKeys(credentias.password);
        element(by.css('.btn.btn-primary')).click();
      }
      
  getPageLoginText() {
    return element(by.css('h2')).getText();
  }
  getErrorMessage() {  
    return element(by.css('.alert.alert-danger')).getText();
  }
  getWelcomePageURL(){
      browser.getCurrentUrl();
  }
  getLoginHomeText(){
    return element(by.css('p')).getText();
  }
  getHomeTitleText(){
    return element(by.css('h3')).getText();
  }
}

/*export class LoginPage {  
    navigateTo() {  
        returnbrowser.get('/login');  
    }  
   
}*/
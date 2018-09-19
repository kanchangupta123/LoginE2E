import { browser,by, element } from 'protractor';

export class ErrorPage {
    
    getError(){
       return element(by.css('.invalid-feedback'));
    }
  }
 
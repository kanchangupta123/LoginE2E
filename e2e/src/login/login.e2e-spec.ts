import { browser,element,by } from 'protractor';
import { LoginPage } from './../login/login.po';
import { ErrorPage } from './../login/error.po';

describe('workspace-project App', () => {
  let page: LoginPage;
  let error :ErrorPage;
  let loginURL;
  let wrongCredentias = {
    username: 'wrongname',
    password: 'wrongpasswd'
  };
  const invalidCredentias = {
    username: '',
    password: ''
  };
  beforeEach(() => {
    page = new LoginPage();
    error = new ErrorPage();
    page.navigateTo();
  });

  it('should display Login message', () => {
    page.navigateTo();
    expect(page.getPageLoginText()).toEqual('Login');
  });

  it('when user trying to login with wrong credentials he should stay on “login” page and see error notification', () => {
    page.fillCredentials(wrongCredentias);
    expect(page.getPageLoginText()).toEqual('Login');
    expect(page.getErrorMessage()).toEqual('Username or password is incorrect');
  }); 

  it('when login is successful — he should redirect to Welcome page', () => {
    loginURL =browser.getCurrentUrl();
    page.fillCredentials();
    expect(page.getWelcomePageURL).not.toEqual(loginURL)
   
   // expect(page.getLoginHomeText()).toEqual('You are logged in with Angular 6!!');
   // expect(page.getHomeTitleText()).toContain('All registered users:');
  });

  it('Invalid credentials', function() {
    wrongCredentias ={
    username: '',
    password: ''
    }
    page.fillCredentials(wrongCredentias);
    expect(page.getPageLoginText()).toEqual('Login');
    
});
it('Invalid credentials Text', function() {
    debugger;
    var username = element(by.formControlName('username')); 
    var password =element(by.formControlName('password'));
    username.clear();
    password.clear();
    expect(username.getAttribute('value')).toEqual('');
    expect(password.getAttribute('value')).toEqual('');
  
    element(by.css('.btn.btn-primary')).click();
    expect(page.getPageLoginText()).toEqual('Login');
  //  expect(element(by.css('invelid'))).toContain('is required');
});
});

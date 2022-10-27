import { AppPage } from './app.po';
import { browser, by, element, protractor } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('title check of your app', () => {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('Newsapp');
  });

  it('should be redirected to /login route on opening the application', () => {
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('should be redirected to /register route', () => {
    browser.element(by.css('.register-button')).click();
    expect(browser.getCurrentUrl()).toContain('/register');
  });

  it('should be able to register user', () => {

    browser.element(by.id('firstName')).sendKeys('Super User');
    browser.element(by.id('lastName')).sendKeys('Super lastUser');
    browser.element(by.id('userId')).sendKeys('Super User12');
    browser.element(by.id('password')).sendKeys('Super Userpass');
    browser.element(by.css('.register-user')).click();
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('should be able to login user and navigate to top news', () => {
    browser.element(by.id('userId')).sendKeys('Super User12');
    browser.element(by.id('password')).sendKeys('Super Userpass');
    browser.element(by.css('.login-user')).click();
    expect(browser.getCurrentUrl()).toContain('/news/top');
  });

  it('should be able to search news', () => {
    browser.element(by.css('.search-button')).click();
    expect(browser.getCurrentUrl()).toContain('/news/search');
    browser.element(by.id('search-button-input')).sendKeys('Super');
    browser.element(by.id('search-button-input')).sendKeys(protractor.Key.ENTER);
    const searchItems = element.all(by.css('.news-title'));
    expect(searchItems.count()).toBe(20);
    for(let i = 0; i < 1; i += 1) {
       expect(searchItems.get(i).getText()).toContain('Super');
     }
  });

  it('should be able to add news to fav list ', async() => {
    browser.driver.manage().window().maximize();
    browser.driver.sleep(1000);
    const searchItems = element.all(by.css('.news-card'));
    expect(searchItems.count()).toBe(20);
    searchItems.get(0).click();
    browser.element(by.css('.add-button')).click();
    browser.driver.sleep(10000);
  });

  it('should be able to delete news from fav list ', async() => {
    browser.element(by.css('.fav-button')).click();
    expect(browser.getCurrentUrl()).toContain('/news/favourites');
    browser.element(by.css('.delete-button')).click();
    browser.element(by.css('.logout')).click();
  });

 
});

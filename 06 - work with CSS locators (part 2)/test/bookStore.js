const { By, Builder } = require("selenium-webdriver");
const { expect } = require("chai");

describe.only(`css locators in book store`, async function() {

    this.timeout(15000);

    beforeEach(async function() {
        // для создания тестового экземпляра браузера с помощью Builder
        driver = await new Builder().forBrowser(`chrome`).build();
        });

    it(`task 1`, async function() {
        
        this.timeout(20000);

        const testUrl = "https://qajava.skillbox.ru/index.html";
        await driver.get(testUrl);

        const aboutUsLocator = By.css("[test-info = 'about-us']");
        const blankHrefLocator = By.css("[href = '']");
        const searchLocator = By.css("[href = 'search.html']");
        const selectedLocator = By.css("option[selected]");
        const bookPriceLocator = By.css("div[class = 'book-price']");
        const bookButtonLocator = By.css("button[class^='book']");
        const mainPageLocator = By.css("[href='index.html']") 
        const mainLocator = By.css("[class$='main']");
        const menuLocator = By.css("[class*='menu']");

        await driver.findElement(aboutUsLocator).click();
        await driver.findElement(blankHrefLocator);
        await driver.findElement(searchLocator).click();
        await driver.findElement(selectedLocator);
        await driver.findElement(bookPriceLocator);
        await driver.findElement(bookButtonLocator);
        await driver.findElement(mainPageLocator).click();
        await driver.findElement(mainLocator);
        await driver.findElement(menuLocator);
    })

    it(`task 2`, async function() {
        this.timeout(20000);

        const testUrl = "https://qajava.skillbox.ru/index.html";
        await driver.get(testUrl);

        const footerDivLocator = By.css("footer > div");
        const listLocator = By.css("li#genres + *");
        const searchLocator = By.css("[href = 'search.html']");
        const closeElementLocator = By.css("div.filter-container ~ *");

        await driver.findElement(footerDivLocator);
        await driver.findElement(listLocator);
        await driver.findElement(searchLocator).click();
        await driver.findElement(closeElementLocator);
    })

    it(`task 3`, async function() {
        this.timeout(20000);

        const testUrl = "https://qajava.skillbox.ru/module05/auth/index.html/";
        await driver.get(testUrl);

        const firstHeaderLocator = By.css("section[for='main-header-page'].important-section-block > h1:first-child");
        const lastParagraphLocator = By.css("form#login-form.form > p:last-child");
        const thirdElementLocator = By.css("body > *:nth-child(3)");
        const firstFooterLinkLocator = By.css("div.footer__menuList > a:nth-of-type(1)");
        const extraTaskLocator = By.css("div.footer__menu > div.footer__menuList:first-child > a:nth-of-type(1)")

        await driver.findElement(firstHeaderLocator);
        await driver.findElement(lastParagraphLocator);
        await driver.findElement(thirdElementLocator);
        await driver.findElement(firstFooterLinkLocator);
        await driver.findElement(extraTaskLocator);
    })

    afterEach(async function() {
        await driver.quit();
    });

})
const { By, Builder } = require("selenium-webdriver");
const { expect } = require("chai");

describe.only(`authorization form`, async function() {

    this.timeout(15000);

    beforeEach(async function() {
        // для создания тестового экземпляра браузера с помощью Builder
        driver = await new Builder().forBrowser(`chrome`).build();
        });

    it(`css locators only`, async function() {
        
        this.timeout(20000);

        const testUrl = "https://qajava.skillbox.ru/module04/homework/auth/changed.html";
        await driver.get(testUrl);

        const email = "@";
        const password = "123";

        const emailFieldLocator = By.css(".form-input.input-data");
        const passwordLocator = By.css(".form-input.password");
        const submitButton = By.css(".form-submit");

        await driver.findElement(emailFieldLocator).sendKeys(email);
        await driver.findElement(passwordLocator).sendKeys(password);
        await driver.findElement(submitButton).click();

        const resultNotification = await driver.findElement(By.css(".form-error-password-email"));

        expect(await resultNotification.getText()).to.be.equal(`Некорректный email или пароль`);
    })

    it(`css locators and tagName`, async function() {
        
        this.timeout(20000);

        const testUrl = "https://qajava.skillbox.ru/module04/homework/auth/changed.html";
        await driver.get(testUrl);

        const email = "@";
        const password = "123";

        const emailFieldLocator = By.css("input.form-input.input-data");
        const passwordLocator = By.css("input.form-input.password");
        const submitButton = By.css("button.form-submit");

        await driver.findElement(emailFieldLocator).sendKeys(email);
        await driver.findElement(passwordLocator).sendKeys(password);
        await driver.findElement(submitButton).click();

        const resultNotification = await driver.findElement(By.css("pre.form-error-password-email"));

        expect(await resultNotification.getText()).to.be.equal(`Некорректный email или пароль`);
    })

    it(`css locators and id`, async function() {
        
        this.timeout(20000);

        const testUrl = "https://qajava.skillbox.ru/module04/homework/auth/changed.html";
        await driver.get(testUrl);

        const email = "@";
        const password = "123";

        const emailFieldLocator = By.css("#email.form-input.input-data");
        const passwordLocator = By.css("#password.form-input.password");
        const submitButton = By.css("#submit.form-submit");

        await driver.findElement(emailFieldLocator).sendKeys(email);
        await driver.findElement(passwordLocator).sendKeys(password);
        await driver.findElement(submitButton).click();

        const resultNotification = await driver.findElement(By.css("#error.form-error-password-email"));

        expect(await resultNotification.getText()).to.be.equal(`Некорректный email или пароль`);
    })

    it(`css locators with id and tagName`, async function() {
        
        this.timeout(20000);

        const testUrl = "https://qajava.skillbox.ru/module04/homework/auth/changed.html";
        await driver.get(testUrl);

        const email = "@";
        const password = "123";

        const emailFieldLocator = By.css("input.form-input.input-data");
        const passwordLocator = By.css("#password.form-input.password");
        const submitButton = By.css("button.form-submit");

        await driver.findElement(emailFieldLocator).sendKeys(email);
        await driver.findElement(passwordLocator).sendKeys(password);
        await driver.findElement(submitButton).click();

        const resultNotification = await driver.findElement(By.css("pre #error.form-error-password-email"));

        expect(await resultNotification.getText()).to.be.equal(`Некорректный email или пароль`);
    })

    afterEach(async function() {
        await driver.quit();
    });

})
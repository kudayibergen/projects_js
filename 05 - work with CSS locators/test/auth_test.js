const { By, Builder } = require("selenium-webdriver");
const { expect } = require("chai");

describe(`authorization form`, async function() {

    this.timeout(15000);

    before(async function() {
        // для создания тестового экземпляра браузера с помощью Builder
        driver = await new Builder().forBrowser(`chrome`).build();
        });

    it(`check notification for incorrect email and password`, async function() {
        
        this.timeout(20000);

        const testUrl = "https://qajava.skillbox.ru/module04/homework/auth/index.html";
        await driver.get(testUrl);

        const email = "@";
        const password = "123";

        const emailFieldLocator = By.name("email");
        const passwordLocator = By.id("password");
        const submitButton = By.tagName("button");

        await driver.findElement(emailFieldLocator).sendKeys(email);
        await driver.findElement(passwordLocator).sendKeys(password);
        await driver.findElement(submitButton).click();

        const resultNotification = await driver.findElement(By.className("form-error-password-email"));

        expect(await resultNotification.getText()).to.be.equal(`Некорректный email или пароль`);
    })

    after(async function() {
        await driver.quit();
    });

})
const { By, Builder } = require("selenium-webdriver");
const { expect } = require("chai");

describe(`fill in form a master`, async function() {

    this.timeout(15000);

    before(async function() {
        // для создания тестового экземпляра браузера с помощью Builder
        driver = await new Builder().forBrowser(`chrome`).build();
        });

    it("user can arrange master arrival", async function() {

        this.timeout(20000);

        const testUrl = "https://qajava.skillbox.ru/module04/lesson3/index.html";
        await driver.get(testUrl);

        const fullName = `Tamir`;
        const street = "Lenina";
        const home = "7a";
        const apartment = "21";
        const arrivalDay = "когда захочешь тогда и приходи";

        const fullNameLocator = By.css(".form-input.fio");
        const streetLocator = By.css(".data.form-input.street");
        const homeLocator = By.css(".form-input.house");
        const apartmentLocator = By.css(".form-input.flat");
        const arrivalDayLocator = By.css(".form-input.date");
        const submitButton = By.css(".form-submit");

        await driver.findElement(fullNameLocator).sendKeys(fullName);
        await driver.findElement(streetLocator).sendKeys(street);
        await driver.findElement(homeLocator).sendKeys(home);
        await driver.findElement(apartmentLocator).sendKeys(apartment);
        await driver.findElement(arrivalDayLocator).sendKeys(arrivalDay);
        await driver.findElement(submitButton).click();

        const resultFullName = await driver.findElement(By.css(".fio.data.show-fio"));
        const resultStreet = await driver.findElement(By.css(".show-street"));
        const resultHome = await driver.findElement(By.css(".show-house"));
        const resultApartment = await driver.findElement(By.css(".show-flat"));
        const resultDate = await driver.findElement(By.css(".show-date"));

        expect (await resultFullName.getText()).to.be.equal(fullName);
        expect (await resultStreet.getText()).to.be.equal(street);
        expect (await resultHome.getText()).to.be.equal(home);
        expect (await resultApartment.getText()).to.be.equal(apartment);
        expect (await resultDate.getText()).to.be.equal(arrivalDay);
    })
    // закрываем браузер с помощью after
    afterEach(async function() {
        await driver.quit();
    });
})
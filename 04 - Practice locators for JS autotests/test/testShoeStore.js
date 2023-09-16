const { By, Builder } = require("selenium-webdriver");
const { expect } = require("chai");

describe("size check for shoe store", async function() {

    // устанавливаем максимальное время выполнение для каждого теста
    this.timeout(15000);

    before(async function() {
        // для создания тестового экземпляра браузера с помощью Builder
        driver = await new Builder().forBrowser(`chrome`).build();
        });

    it("positve size", async function() {
        this.timeout(20000);
        const shoeSize = 36;

        await driver.get(`https://lm.skillbox.cc/qa_tester/module03/practice1/`);

        const sizeField = await driver.findElement(By.name(`check`));
        const checkButton = await driver.findElement(By.tagName(`button`));

        await sizeField.sendKeys(shoeSize);
        await checkButton.click();
        const resultNote = await driver.findElement(By.id(`size-success`));

        expect(await resultNote.getText()).to.be.equal(
            `В нашем магазине есть обувь вашего размера`
            );
    })

    it("negative size", async function() {
        this.timeout(20000);
        const badsize = 50;

        await driver.get(`https://lm.skillbox.cc/qa_tester/module03/practice1/`);

        const sizeField = await driver.findElement(By.name(`check`));
        const checkButton = await driver.findElement(By.tagName(`button`));

        await sizeField.sendKeys(badsize);
        await checkButton.click();
        const resultNote = await driver.findElement(By.id(`size-error`));

        expect(await resultNote.getText()).to.be.equal(
            `В нашем магазине нет обуви вашего размера`
            );
    })

     // закрываем браузер с помощью after
     after (async function() {
        await driver.quit();
    });
})

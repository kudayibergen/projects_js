const { By, Builder, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("6 module_taxiOrderApp", async function() {

    this.timeout(15000);

    it("task 2", async function() {

        this.timeout(20000);

        const testUrl = "https://lm.skillbox.cc/qa_tester/module04/practice1/";
        await driver.get(testUrl);

        const inputWithoutId = By.css("input:not([id])");
        const allParagraphLocator = By.css("p[class^='form']:not([class$='error'])");
        const firstParagraph = By.css("div.form-inner p.form-row:nth-of-type(1)");

        await driver.findElement(inputWithoutId);
        await driver.findElement(allParagraphLocator);
        await driver.findElement(firstParagraph);
    })
})
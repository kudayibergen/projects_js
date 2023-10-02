const { By, Builder, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("6 module", async function() {

    this.timeout(15000);

    it("task1_finding all locators", async function() {
        // для раздела А
        const paragraphLocator = By.css("section.header p");
        // для раздела В
        const linksLocator = By.css("a:not(:nth-of-type(3))");
        // для раздела С
        const thisYearLocator = By.css("div.header[name = 'headerName'] a:nth-of-type(2)");
    })
})
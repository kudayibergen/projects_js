const { By} = require("selenium-webdriver");


describe("writing xPat h locators", function() {

    const testUrl = "http://qa.skillbox.ru/module19/";

    it("create locator which were given in task 1", async function() {

        // устанавливаем максимальное время для ожидания тест в 20 сек
        this.timeout(20000);

        // описание для локаторов на странице, которые будут использованы в коде
        const leftSliderLocator = By.xpath("//span[@class='da-arrow-prev']");
        const readMoreButtonLocator = By.xpath("//a[@class='da-link button']");
        const noActiveFilterLocator = By.xpath("//li[@class='filter']");
        const allButtonsLocator = By.xpath("//*[starts-with(@class, 'button')]");
        const subscribeButtonLocator = By.xpath("//div[@class='container centered']/a");
        const allClientImages = By.xpath("//ul[@id='clint-slider']//img");
        const siblingElements = By.xpath("//div[@class='span4 price-column']/h3/following-sibling::*");

        await driver.get(testUrl);
        
        await driver.findElement(leftSliderLocator);
        await driver.findElement(readMoreButtonLocator);
        await driver.findElement(noActiveFilterLocator);
        await driver.findElement(allButtonsLocator);
        await driver.findElement(subscribeButtonLocator);
        await driver.findElement(allClientImages);
        await driver.findElement(siblingElements);
    })
})
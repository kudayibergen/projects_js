const { By } = require("selenium-webdriver");

describe("online course site", function() {

    const testUrl = "http://qa.skillbox.ru/module16/maincatalog/";

    it("xpath locators", async function() {
        
        // устанавливаем максимальное время для ожидания тест в 20 сек
        this.timeout(20000);

        // описание для локаторов на странице, которые будут использованы в коде
        const fifthCourseTitleLocator = By.xpath("((//*[@class='baseCard__title'])[5])");
        const lastCoursePeriodLocator = By.xpath("((//div[@class='baseCard__conditions']//p)[last()])");
        const allBlanklinks = By.xpath("//a[@href='#']/parent::div");
        const fifthBlankLinkLocator = By.xpath("(//a[@href='#']/parent::div)[5]");
        const ancestorsLocator = By.xpath("//div[@class='pageCreate__title']/ancestor::*");

        await driver.get(testUrl);

        await driver.findElement(fifthCourseTitleLocator);
        await driver.findElement(lastCoursePeriodLocator);
        await driver.findElement(allBlanklinks);
        await driver.findElement(fifthBlankLinkLocator);
        await driver.findElement(ancestorsLocator);
    })
})
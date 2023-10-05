const { By } = require("selenium-webdriver");

describe.only("online book store with xpath locators", function() {

    const testUrl = "https://qajava.skillbox.ru/index.html";
    const testUrl2 = "https://qajava.skillbox.ru/checkout.html";

    it("xpath locators", async function() {

        // устанавливаем максимальное время для ожидания тест в 20 сек
        this.timeout(20000);

        // описание для локаторов на странице, которые будут использованы в коде
        const aboutUsLocator = By.xpath("//footer//a[@test-info='about-us']");
        const bestsellersLocator = By.xpath("(//div[@class='content']/h1)[3]");
        const searchLocator = By.xpath("//input[@id='search-input']");
        const searchButtonLocator = By.xpath("//a[@href='search.html']");
        const cancelButtonLocator = By.xpath("//*[@class='filter-button']");

        await driver.get(testUrl);

        await driver.findElement(aboutUsLocator);
        await driver.findElement(bestsellersLocator);
        await driver.findElement(searchLocator);
        await driver.findElement(searchButtonLocator).click();
        await driver.findElement(cancelButtonLocator);
    })

    it("checkout xpath locators", async function() {

        // устанавливаем максимальное время для ожидания тест в 20 сек
        this.timeout(20000);
       
        const finalPriceLocator = By.xpath("//*[@id='total']");
        const yourOrderTitle = By.xpath("//*[@class='order-info']//child::div[1]");

        await driver.get(testUrl2);

        await driver.findElement(finalPriceLocator);
        await driver.findElement(yourOrderTitle);
    })
}) 
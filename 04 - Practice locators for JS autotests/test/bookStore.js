const { By, Builder, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("find book store locators", async function() {

    // устанавливаем максимальное время выполнение для каждого теста
    this.timeout(15000);

    before(async function() {
        // для создания тестового экземпляра браузера с помощью Builder
        driver = await new Builder().forBrowser(`chrome`).build();
        });

    it("locators", async function() {
        this.timeout(20000);

        await driver.get(`https://qajava.skillbox.ru/`);

        const feedbackLink = await driver.findElement(By.linkText(`Обратная связь`));
        const preOrders = await driver.findElement(By.linkText(`Предзаказы`));
        const firstBook = await driver.findElement(By.className(`book-add`));

        await feedbackLink.click();
        await driver.wait(until.urlContains(`https://qajava.skillbox.ru/`), 10000);

        await preOrders.click();
        await driver.wait(until.urlContains(`https://qajava.skillbox.ru/`), 10000);

        
        await firstBook.click();
        await driver.wait(until.urlContains(`https://qajava.skillbox.ru/`), 10000);

        const cartNumber = await driver.findElement(By.id(`cart_count`));
        const menuGenres = await driver.findElement(By.linkText(`Книги`));
        const searchBar = await driver.findElement(By.name(`search-input-form`));

        await cartNumber.click();
        await menuGenres.click();
        await searchBar.click();
    })

     // закрываем браузер с помощью after
    after (async function() {
        await driver.quit();
    });
})

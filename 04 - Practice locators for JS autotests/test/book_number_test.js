const { By, Builder, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("book store test", async function() {

    // устанавливаем максимальное время выполнение для каждого теста
    this.timeout(15000);

    before(async function() {
        // для создания тестового экземпляра браузера с помощью Builder
        driver = await new Builder().forBrowser(`chrome`).build();
        });

    it("should find 15 book info elements", async function() {
        await driver.get("https://qajava.skillbox.ru/");

        // Ищем все элементы с классом "book-info"
        const bookInfoElements = await driver.findElements(By.className("book-info"));

        // Проверяем количество найденных элементов равно 15
        expect(bookInfoElements.length).to.equal(15);
    })

     // закрываем браузер с помощью after
    after (async function() {
        await driver.quit();
    });
})

const { Builder, By, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("welcome screen test", function () {
    //устанавливаем максимальное время ожидания для каждого теста в 15 секунд
    this.timeout(15000);

    // подготовка тестирования с помощью before
    before(async function() {
        // для создания тестового экземпляра браузера с помощью Builder
        driver = await new Builder().forBrowser(`chrome`).build();
    });

    // описания блока теста it 
    it("Should show greeting after entering username", async function () {
        // устанавливаем максимальное время ожидания для текущего теста 20 секунд
        this.timeout(20000);
        // задаем имя пользователя
        const userName = "Вася";

        // открываем веб страницу
        await driver.get("https://lm.skillbox.ru/qa_tester/module01/");
        // находим поле ввода имени и вводим имя пользователя
        await driver.findElement(By.name("name")).sendKeys(userName);
        // находим кнопку и кликаем на нее
        await driver.findElement(By.className("button")).click();

        // находим элемент с приветствием и извлекаем текст
        const welcomeMessage = await driver
        .findElement(By.className("start-screen__res"))
        .getText();
        // проверяем что текст приветствия совпадает с ожидаемым
        expect(welcomeMessage).to.equal(`Привет, ${userName}!`);
    });

    // закрываем браузер с помощью after
    after (async function() {
        await driver.quit();
    })
});

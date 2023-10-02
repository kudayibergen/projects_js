const { By, until } = require("selenium-webdriver");
const { expect } = require("chai");

// Описываем тестовый сценарии с помощью дескрайб
describe.only("6 module_plannerApp", function() {

    // указываем адрес тестируемой страницы
    const testUrl = "http://qa.skillbox.ru/module15/bignotes/#/";

    it("task 3", async function() {

        // устанавливаем максимальное время для ожидания тест в 20 сек
        this.timeout(20000);

        // описание для локаторов на странице, которые будут использованы в коде
        const noteLinkCenterLocator = By.css(".articlePreview__link");
        const sideBarNoteLocator = By.css(".articlePreview.pageArticle__articlePreview:first-child .articlePreview__link");
        const sideBarNoteTitleLocator = By.css(".articlePreview.pageArticle__articlePreview:first-child .articlePreview__title");
        const sideBarNoteTextLocator = By.css(".articlePreview.pageArticle__articlePreview:first-child .articlePreview__text");
        const noteCenterDelBtnLocator = By.css(".pageArticle__button:nth-child(2)");
        await driver.get(testUrl); // открываем браузер и переходим по нашему адресу

        // action
        // кликаем по локатору
        await driver.findElement(noteLinkCenterLocator).click(); 
        // ожидание появления элемента с данным локатором
        await driver.wait(until.elementLocated(sideBarNoteLocator), 5000);
        // получаем текст заголовка и текст заметки из боковой панели.
        const sideBarNoteTitle = await driver
            .findElement(sideBarNoteTitleLocator)
            .getText();
        const sideBarNoteText = await driver
            .findElement(sideBarNoteTextLocator)
            .getText();

        // expect
        // проверяем значения заголовка и текста
        expect(sideBarNoteTitle).to.be
            .equal("План на следующий месяц", "wrong title");
        expect(sideBarNoteText).to.be
            .equal("Прочитать книгу «Искусство цвета».", "wrong text");

        // кликнуть для кнопки удаления
        await driver.findElement(noteCenterDelBtnLocator).click();
        // клик на элемент боковой панели
        await driver.findElement(sideBarNoteLocator).click();
        // делаем задержку в три секунды с помощью промиса и сеттаймаут 
        await new Promise((resolve) => setTimeout(resolve, 3000));
        // кликаем на кнопку удаления в центральной части страницы еще раз
        await driver.findElement(noteCenterDelBtnLocator).click();
        // ожидаем пока элемент с этим локатором не исчезнет 
        await driver.wait(async() => {
            const elem = await driver.findElement(sideBarNoteLocator);
            if (elem.length == 0) {
                return true;
            } else {
                return false;
            }
        })
    })
})
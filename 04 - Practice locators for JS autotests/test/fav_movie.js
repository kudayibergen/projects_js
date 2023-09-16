const { By, Builder } = require("selenium-webdriver");
const { expect } = require("chai");

describe.only("favorite movie", async function() {

    // устанавливаем максимальное время выполнение для каждого теста
    this.timeout(15000);

    beforeEach(async function() {
        // для создания тестового экземпляра браузера с помощью Builder
        driver = await new Builder().forBrowser(`chrome`).build();
        });

    it("should delete your choice", async function() {
        this.timeout(20000);
        const favoriteMovie = `Заклятие`;
        const favoriteShow = `Тед Лассо`;

        await driver.get(`https://lm.skillbox.cc/qa_tester/module07/practice3/`);

        const movieField = await driver.findElement(By.name(`films`));
        const showField = await driver.findElement(By.name(`serials`));
        const deleteIcon = await driver.findElement(By.className(`delete`));

        await movieField.sendKeys(favoriteMovie);
        await showField.sendKeys(favoriteShow);
        await deleteIcon.click();
    })

    it("should save info about your movie and serials", async function() {
        this.timeout(20000);
        const favoriteMovie = `Заклятие`;
        const favoriteShow = `Тед Лассо`;

        await driver.get(`https://lm.skillbox.cc/qa_tester/module07/practice3/`);

        const movieField = await driver.findElement(By.name(`films`));
        const showField = await driver.findElement(By.name(`serials`));
        const saveButton = await driver.findElement(By.id(`save`));
        const pageTwo = await driver.findElement(By.id(`two`));

        await movieField.sendKeys(favoriteMovie);
        await showField.sendKeys(favoriteShow);
        await saveButton.click();
        await pageTwo.click();

        const insertButton = await driver.findElement(By.id(`save`));
        const okButton = await driver.findElement(By.id(`ok`));

        await insertButton.click();
        await okButton.click();

        const resultMovie = await driver.findElement(By.id(`best_films`));
        const resultShow = await driver.findElement(By.id(`best_serials`));

        expect(await resultMovie.getText()).to.be.equal(
            favoriteMovie
            );
        
        expect(await resultShow.getText()).to.be.equal(
            favoriteShow
            );
    })

    it("should not accept empty info", async function() {
        this.timeout(20000);
        const favoriteMovie = ``;
        const favoriteShow = ``;

        await driver.get(`https://lm.skillbox.cc/qa_tester/module07/practice3/`);

        const movieField = await driver.findElement(By.name(`films`));
        const showField = await driver.findElement(By.name(`serials`));
        const saveButton = await driver.findElement(By.id(`save`));
        const pageTwo = await driver.findElement(By.id(`two`));

        await movieField.sendKeys(favoriteMovie);
        await showField.sendKeys(favoriteShow);
        await saveButton.click();
        await pageTwo.click();

        const insertButton = await driver.findElement(By.id(`save`));
        const okButton = await driver.findElement(By.id(`ok`));

        await insertButton.click();
        await okButton.click();

        const resultMovie = await driver.findElement(By.id(`best_films`));
        const resultShow = await driver.findElement(By.id(`best_serials`));

        expect(await resultMovie.getText()).to.be.equal(
            favoriteMovie
            );
        
        expect(await resultShow.getText()).to.be.equal(
            favoriteShow
            );
    })

     // закрываем браузер с помощью after
     afterEach(async function() {
        await driver.quit();
    });
})

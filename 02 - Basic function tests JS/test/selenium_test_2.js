const { Builder, By, until } = require("selenium-webdriver");
const { expect } = require("chai");

// описание набора тестов для нового сайта
describe("new site test", async function () {
    // устанавливаем максимальное время выполнение для каждого теста
    this.timeout(15000);

    // подготовка тестирования с помощью before
    before(async function() {
    // для создания тестового экземпляра браузера с помощью Builder
    driver = await new Builder().forBrowser(`chrome`).build();
    });

    // Тест: показать приветствие после ввода данных пользователя (позитивный тест)
    it("Should show greeting after entering user details", async function () {
        this.timeout(20000);
        const userName = "Tamir";
        const email = "Tamir@gmail.com";
        const phone = "123456789";

        await driver.get("https://lm.skillbox.cc/qa_tester/module02/homework1/");
        
        await driver.findElement(By.name("fullName")).sendKeys(userName);
        await driver.findElement(By.name("email")).sendKeys(email);
        await driver.findElement(By.name("phone")).sendKeys(phone);
        await driver.findElement(By.className("button")).click();

        const welcomeMessage = await driver
        .findElement(By.className("welcome-message")).getText();
        expect(welcomeMessage).to.equal(`Здравствуйте, ${userName}.
        На вашу почту ${email} отправлено письмо.
        Наш сотрудник свяжется с вами по телефону: ${phone}.`);
    });

    // Тест: отображение сообщения об ошибке при отсутствии полного имени
    it("Should display error message for missing full name", async function () {
        this.timeout(20000);
        const email = "Tamir@gmail.com";
        const phone = "123456789";

        await driver.get("https://lm.skillbox.cc/qa_tester/module02/homework1/");
        
        await driver.findElement(By.name("email")).sendKeys(email);
        await driver.findElement(By.name("phone")).sendKeys(phone);
        await driver.findElement(By.className("button")).click();

        const errorMessage = await driver
        .findElement(By.className("error-message")).getText();
        expect(errorMessage).to.equal("Пожалуйста, введите ваше полное имя.");
    });

    // Тест: отображение сообщения об ошибке при отсутствии электронной почты
    it("Should display error message for missing email", async function () {
        this.timeout(20000);
        const userName = "Tamir";
        const phone = "123456789";

        await driver.get("https://lm.skillbox.cc/qa_tester/module02/homework1/");
        
        await driver.findElement(By.name("fullName")).sendKeys(userName);
        await driver.findElement(By.name("phone")).sendKeys(phone);
        await driver.findElement(By.className("button")).click();

        const errorMessage = await driver
        .findElement(By.className("error-message")).getText();
        expect(errorMessage).to.equal("Пожалуйста, введите ваш адрес электронной почты.");
    });

    // Тест: отображение сообщения об ошибке при отсутствии номера телефона
    it("Should display error message for missing phone", async function () {
        this.timeout(20000);
        const userName = "Tamir";
        const email = "Tamir@gmail.com";

        await driver.get("https://lm.skillbox.cc/qa_tester/module02/homework1/");
        
        await driver.findElement(By.name("fullName")).sendKeys(userName);
        await driver.findElement(By.name("email")).sendKeys(email);
        await driver.findElement(By.className("button")).click();

        const errorMessage = await driver
        .findElement(By.className("error-message")).getText();
        expect(errorMessage).to.equal("Пожалуйста, введите ваш номер телефона.");
    });

    // Тест: отображение сообщения об ошибке при нажатии по кнопке без ввода данных
    it("Should display error message for click with no data", async function () {
        this.timeout(20000);
        
        await driver.get("https://lm.skillbox.cc/qa_tester/module02/homework1/");
        await driver.findElement(By.className("button")).click();

        const errorMessage = await driver
        .findElement(By.className("error-message")).getText();
        expect(errorMessage).to.equal("Пожалуйста, заполните все поля");
    });

    // закрываем браузер с помощью after
    after (async function() {
        await driver.quit();
    });
});

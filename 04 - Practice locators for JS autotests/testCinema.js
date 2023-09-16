const {expect} = require("chai");
const {By} = require("selenium-webdriver");

describe(`smoke test for successful registration`, async function() {
    it("trying different test locator strategies", async function() {
    
    const email = `temir-18@mail.ru`;
    const password = `Aruzhan23@`;

    await driver.get(`https://lm.skillbox.cc/qa_tester/module05/practice1/`)

    const emailField = await driver.findElement(By.className(`form-input`));
    const passwordField = await driver.findElement(By.id(`password`));
    const confirmPasswordField = await driver.findElement(By.name(`confirm_password`));
    const registerButton = await driver.findElement(By.tagName(`button`));

    await emailField.sendKeys(email);
    await passwordField.sendKeys(password);
    await confirmPasswordField.sendKeys(password);
    await registerButton.click();
    const resultHeader = await driver.findElement(By.tagName(`h3`));
    const resultEmailByLinkText = await driver.findElement(By.linkText(email));
    const resultEmailByPartialLinkText = await driver
    .findElement(By.partialLinkText(email));

    expect(await resultHeader.getText()).to.be.equal(
        "Спасибо за регистрацию!", 
        "wrong text for successful registration"
        );

    expect(await resultEmailByLinkText.getText()).to.be.equal(
        email, 
        "wrong text for successful registration"
        );
})
})

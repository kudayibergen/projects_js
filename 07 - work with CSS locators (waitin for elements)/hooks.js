const { Builder } = require("selenium-webdriver");
exports.mochaHooks = {
    beforeEach: async function() {
        // для создания тестового экземпляра браузера с помощью Builder
        driver = await new Builder().forBrowser(`chrome`).build(); 
        },
        afterEach: async function() {
            await driver.quit();
        },
};

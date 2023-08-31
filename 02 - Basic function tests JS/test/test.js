// тест с использованием mocha.js
const getRefundTicketPricePercent = require('../ticketRefundTest.js');
const assert = require('assert');

describe("Testing refund ticket price percent", function() {
    // Проверка: возврат 100% при отмене и переносе концерта
    it("should return 100% when concert is cancelled and rescheduled", function() {
        const result = getRefundTicketPricePercent(10, true, true);
        assert.strictEqual(result, 100);
    });

    // Проверка: возврат 100% более чем за 10 дней до концерта
    it("should return 100% when more than 10 days before the concert", function() {
        const result = getRefundTicketPricePercent(260, false, false);
        assert.strictEqual(result, 100);
    });

    // Проверка: возврат 50% при возврате от 6 до 10 дней до концерта
    it("should return 50% when 6 to 10 days before the concert", function() {
        const result = getRefundTicketPricePercent(240, false, false);
        assert.strictEqual(result, 50);
    });

    // Проверка: возврат 30% при возврате от 3 до 6 дней до концерта
    it("should return 30% when 3 to 6 days before the concert", function() {
        const result = getRefundTicketPricePercent(145, false, false);
        assert.strictEqual(result, 30);
    });

     // Проверка: возврат 30% при возврате от 3 до 6 дней до концерта
     it("should return 30% when 3 to 6 days before the concert", function() {
        const result = getRefundTicketPricePercent(72, false, false);
        assert.strictEqual(result, 30);
    });

    // Проверка:возврат 0% при менее чем за 72 часов до концерат
    it("should return 0% when less than 72 hours before the concert", function() {
        const result = getRefundTicketPricePercent(0, false, false);
        assert.strictEqual(result, 0);
    });
});

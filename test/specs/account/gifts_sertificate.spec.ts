import { App } from '../../application/application'
var Faker = require('Faker')

describe("Gift Certificate", function () {
    it("can be purchased", function () {
        browser.url('/index.php?route=account/voucher')
        expect(browser).toHaveUrlContaining('/index.php?route=account/voucher')
        const app = new App()
        app.giftSertificatePage.fillingGiftSertificateFields({
            recipientName: Faker.name.firstName(),
            recipientEmail: Faker.internet.email(),
            fromName: Faker.name.firstName(),
            fromEmail: Faker.internet.email(),
            giftCertificateTheme: "7",
            giftCertificateMessage: Faker.random.words(),
            giftCertificateAmount: Faker.finance.amount(1,1000),
            checkBoxNonRefundableAgree: "agree"
        })
        app.giftSertificatePage.continue()
    });
});   

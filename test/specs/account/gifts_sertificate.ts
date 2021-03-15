//import faker from 'faker'
var Faker = require('Faker');
describe("Gift Certificate", function () {
    it("can be purchased", function () {
        browser.url('/index.php?route=account/voucher');
        browser.pause(1000);
        const giftCertificateForm = $('#account-voucher');
    
        const recipientName = giftCertificateForm.$('#input-to-name');
        recipientName.setValue(Faker.name.firstName());

        const recipientEmail = giftCertificateForm.$('#input-to-email');
        recipientEmail.setValue(Faker.internet.email());

        const fromName = giftCertificateForm.$('#input-from-name');
        fromName.setValue(Faker.name.firstName());

        const fromEmail = giftCertificateForm.$('#input-from-email');
        fromEmail.setValue(Faker.internet.email());

        const giftCertificateTheme = giftCertificateForm.$('.radio > label [value="7"]');
        giftCertificateTheme.click();

        const giftCertificateMessage = giftCertificateForm.$('#input-message');
        giftCertificateMessage.setValue(Faker.random.words());

        const giftCertificateAmount = giftCertificateForm.$('#input-amount');
        giftCertificateAmount.setValue(Faker.finance.amount(1,1000));

        const checkBoxNonRefundableAgree = giftCertificateForm.$('.buttons .pull-right [name="agree"]');
        checkBoxNonRefundableAgree.click();

        const buttonContinue = giftCertificateForm.$('.buttons .pull-right [value="Continue"]');
        buttonContinue.click()
        browser.pause(1000);
        expect(browser).toHaveUrlContaining('/index.php?route=account/voucher/success');
    });
});   

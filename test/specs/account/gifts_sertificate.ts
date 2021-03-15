
describe("Gift Certificate", function () {
    it("can be purchased", function () {
        browser.url('/index.php?route=account/voucher');
        browser.pause(1000);
        const giftCertificateForm = $('#account-voucher');
        function randomValue(countCharacters, sepecificString = "", onlyNumbers = false) {
            var text = "";
            var possible = "";
            if (onlyNumbers) {
                possible = "0123456789";
            } else {
                possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            }
            for (var i = 0; i < countCharacters; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text + sepecificString;
        }
        const recipientName = giftCertificateForm.$('#input-to-name');
        recipientName.setValue(randomValue(5, Date.now().toString()));

        const recipientEmail = giftCertificateForm.$('#input-to-email');
        recipientEmail.setValue(randomValue(5, "@test.com"));

        const fromName = giftCertificateForm.$('#input-from-name');
        fromName.setValue(randomValue(5, Date.now().toString()));

        const fromEmail = giftCertificateForm.$('#input-from-email');
        fromEmail.setValue(randomValue(5, "@test.com"));

        const giftCertificateTheme = giftCertificateForm.$('.radio > label [value="7"]');
        giftCertificateTheme.click();

        const giftCertificateMessage = giftCertificateForm.$('#input-message');
        giftCertificateMessage.setValue(randomValue(5, Date.now().toString()));

        const giftCertificateAmount = giftCertificateForm.$('#input-amount');
        giftCertificateAmount.setValue(randomValue(3,'',true));

        const checkBoxNonRefundableAgree = giftCertificateForm.$('.buttons .pull-right [name="agree"]');
        checkBoxNonRefundableAgree.click();

        const buttonContinue = giftCertificateForm.$('.buttons .pull-right [value="Continue"]');
        buttonContinue.click()
        browser.pause(1000);
        expect(browser).toHaveUrlContaining('/index.php?route=account/voucher/success');
    });
});   
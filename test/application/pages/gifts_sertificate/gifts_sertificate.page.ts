
export class GiftSertificatePage {
    isOpened(): boolean {
        throw new Error('Not implemented yet')
    }
    private get root(): WebdriverIO.Element {
        return $('#account-voucher')
    }
    fillingGiftSertificateFields(
        data: {
            recipientName: string,
            recipientEmail: string,
            fromName: string,
            fromEmail: string,
            giftCertificateTheme: string,
            giftCertificateMessage: string,
            giftCertificateAmount: string,
            checkBoxNonRefundableAgree: string
        }
    ) {
        console.log('[gifts_sertificate.page] Filling gift sertificate fields', JSON.stringify(data, null, 2))
        
        const recipientName = this.root.$('#input-to-name');
        expect(recipientName).toBeClickable()
        recipientName.setValue(data.recipientName);

        const recipientEmail = this.root.$('#input-to-email');
        expect(recipientEmail).toBeClickable()
        recipientEmail.setValue(data.recipientEmail);

        const fromName = this.root.$('#input-from-name');
        expect(fromName).toBeClickable()
        fromName.setValue(data.fromName);

        const fromEmail = this.root.$('#input-from-email');
        expect(fromEmail).toBeClickable()
        fromEmail.setValue(data.fromEmail);

        const giftCertificateTheme = this.root.$(`.radio > label [value="${data.giftCertificateTheme}"]`);
        expect(giftCertificateTheme).toBeClickable()
        giftCertificateTheme.click();

        const giftCertificateMessage = this.root.$('#input-message');
        expect(giftCertificateMessage).toBeClickable()
        giftCertificateMessage.setValue(data.giftCertificateMessage);

        const giftCertificateAmount = this.root.$('#input-amount');
        expect(giftCertificateAmount).toBeClickable()
        giftCertificateAmount.setValue(data.giftCertificateAmount);

        const checkBoxNonRefundableAgree = this.root.$(`.buttons .pull-right [name="${data.checkBoxNonRefundableAgree}"]`);
        expect(checkBoxNonRefundableAgree).toBeClickable()
        checkBoxNonRefundableAgree.click();
    }
    continue() {
        const buttonContinue = this.root.$('.buttons .pull-right [value="Continue"]');
        expect(buttonContinue).toBeClickable({ message: 'Expected Continue button to be visible' })
        buttonContinue.click()
        browser.pause(500)
    }
}
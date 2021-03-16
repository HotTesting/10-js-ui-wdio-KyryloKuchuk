
export class DeliveryMethodComponent {
    private get root(): WebdriverIO.Element {
        return $('div#collapse-shipping-method').parentElement()
    }

    continue() {
        browser.pause(500)
        const continueButton = this.root.$('#button-shipping-method')
        expect(continueButton).toBeClickable({ message: 'Expected Continue button to be visible' })
        continueButton.click()
    }
}
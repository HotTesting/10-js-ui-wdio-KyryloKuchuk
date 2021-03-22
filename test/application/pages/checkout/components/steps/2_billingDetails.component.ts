
export class BillingDetailsComponent {
    private get root(): WebdriverIO.Element {
        return $('div#collapse-payment-address').parentElement()
    }

    fillBillingDetails(data: {
        newAddress: boolean,
        registerUser: boolean,
        firstCheckOut:boolean,
        firstName: string,
        lastName: string,
        email: string | null,
        telephone: string | null,
        address1: string,
        city: string,
        postCode: string,
        country: string,
        region: string,
        sameShippingAddress: boolean
    }) {
        console.log('[BillingDetailsComponent] Filling biling details step', JSON.stringify(data, null, 2))
        if (data.newAddress) {
            if (data.registerUser && !data.firstCheckOut){
                const newAddressCheckBox = this.root.$('[name="payment_address"][value="new"]')
                newAddressCheckBox.click()
            }
            expect(this.root.$('#input-payment-firstname')).toBeClickable()
            const firstName = this.root.$('#input-payment-firstname')
            firstName.scrollIntoView(false)
            firstName.setValue(data.firstName)

            const lastname = this.root.$('#input-payment-lastname')
            lastname.scrollIntoView(false)
            lastname.setValue(data.lastName)

            const email = this.root.$('#input-payment-email')
            if (data.email !== null) {
                email.scrollIntoView(false)
                email.setValue(data.email)
            }

            const telephone = this.root.$('#input-payment-telephone')
            if (data.telephone !== null) {
                telephone.scrollIntoView(false)
                telephone.setValue(data.telephone)
            }

            const address1 = this.root.$('#input-payment-address-1')
            address1.scrollIntoView(false)
            address1.setValue(data.address1)

            const city = this.root.$('#input-payment-city')
            city.scrollIntoView(false)
            city.setValue(data.city)

            const postcode = this.root.$('#input-payment-postcode')
            postcode.scrollIntoView(false)
            postcode.setValue(data.postCode)

            const country = this.root.$('#input-payment-country')
            country.scrollIntoView(false)
            //TODO: Need change when drop downs will fixed, hardcode because dropdowns brokens
            country.selectByAttribute('value', data.country)
            browser.pause(1000)
            const region = this.root.$('#input-payment-zone')
            region.scrollIntoView(false)
            region.selectByAttribute('value', data.region)
        }
        if (!data.sameShippingAddress && !data.registerUser) {
            const sameShippingAddress = this.root.$('[name="shipping_address"]')
            sameShippingAddress.click()
        }
    }

    continue(userType: string) {
        let continueButton = null;
        if (userType === 'guest') {
            continueButton = this.root.$('input[type="button"][value="Continue"]#button-guest')
        } else {
            continueButton = this.root.$('input[type="button"][value="Continue"]#button-payment-address')
            
        }
        continueButton.scrollIntoView(false)
        expect(continueButton).toBeClickable({ message: 'Expected Continue button to be visible' })
        continueButton.click()
    }
}

export class DeliveryDetailsComponent {
    private get root(): WebdriverIO.Element {
        return $('div#collapse-shipping-address').parentElement()
    }

    fillDeliveryDetails(data: {
        newAddress: boolean,
        registerUser: boolean,
        firstName: string,
        lastName: string,
        company: string,
        address1: string,
        city: string,
        postCode: string,
        country: string,
        region: string
    }) {
        console.log('[DeliveryDetailsComponent] Filling shipping details step', JSON.stringify(data, null, 2))
        if (data.newAddress) {
            if (data.registerUser) {
                const newAddressCheckBox = this.root.$('[name="shipping_address"][value="new"]')
                newAddressCheckBox.click()
            }
            expect(this.root.$('#input-shipping-firstname')).toBeClickable()
            const firstName = this.root.$('#input-shipping-firstname')
            firstName.scrollIntoView(false)
            firstName.setValue(data.firstName)

            const lastname = this.root.$('#input-shipping-lastname')
            lastname.scrollIntoView(false)
            lastname.setValue(data.lastName)

            const company = this.root.$('#input-shipping-company')
            company.scrollIntoView(false)
            company.setValue(data.company)

            const address1 = this.root.$('#input-shipping-address-1')
            address1.scrollIntoView(false)
            address1.setValue(data.address1)

            const city = this.root.$('#input-shipping-city')
            city.scrollIntoView(false)
            city.setValue(data.city)

            const postcode = this.root.$('#input-shipping-postcode')
            postcode.scrollIntoView(false)
            postcode.setValue(data.postCode)

            const country = this.root.$('#input-shipping-country')
            country.scrollIntoView(false)
            //TODO: Need change when drop downs will fixed, hardcode because dropdowns brokens
            country.selectByAttribute('value', data.country)
            browser.pause(1000)
            const region = this.root.$('#input-shipping-zone')
            region.scrollIntoView(false)
            region.selectByAttribute('value', data.region)
        }
    }

    continue(userType) {
        let continueButton = null;
        if (userType === 'guest') {
            continueButton = this.root.$('input[type="button"][value="Continue"]#button-guest-shipping')
        } else {
            continueButton = this.root.$('input[type="button"][value="Continue"]#button-shipping-address')

        }
        continueButton.scrollIntoView(false)
        expect(continueButton).toBeClickable({ message: 'Expected Continue button to be visible' })
        continueButton.click()
    }
}
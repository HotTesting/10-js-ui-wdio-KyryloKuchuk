
export class ContactUsPage {
    isOpened(): boolean {
        throw new Error('Not implemented yet')
    }
    private get root(): WebdriverIO.Element {
        return $('#information-contact')
    }
    fillingLoginFields(
        data: {
            name: string,
            email: string,
            enquiry: string
        }
    ) {
        console.log('[login.page] Filling login fields', JSON.stringify(data, null, 2))
        expect(this.root.$('#input-name')).toBeClickable()
        this.root.$('#input-name').setValue(data.name)
        expect(this.root.$('#input-email')).toBeClickable()
        this.root.$('#input-email').setValue(data.email)
        expect(this.root.$('#input-enquiry')).toBeClickable()
        this.root.$('#input-enquiry').setValue(data.enquiry)
    }
    submit() {
        const buttonSubmit = this.root.$('.buttons [value="Submit"]')
        expect(buttonSubmit).toBeClickable({ message: 'Expected Login button to be visible' })
        buttonSubmit.click()
        expect(browser).toHaveUrlContaining('/index.php?route=information/contact/success')
    }
}

export class LoginPage {
    //HOW: doesn't work
    // isOpened(): boolean {
    //     const expectedPage = expect(browser).toHaveUrlContaining(`/index.php?route=account/login`);
    //     if (expectedPage) {
    //         return true
    //     } else {
    //         return false
    //         console.log('Incorrect url')
    //     }
    // }
    private get root(): WebdriverIO.Element {
        return $('#content')
    }
    fillingLoginFields(
        data: {
            emailAddressAsLogin: string,
            password: string
        }
    ) {
        console.log('[login.page] Filling login fields', JSON.stringify(data, null, 2))
        expect(this.root.$('#input-email')).toBeClickable()
        this.root.$('#input-email').setValue(data.emailAddressAsLogin)
        expect(this.root.$('#input-password')).toBeClickable()
        this.root.$('#input-password').setValue(data.password)
    }
    login() {
        const loginButton = this.root.$('.btn[value="Login"]')
        expect(loginButton).toBeClickable({ message: 'Expected Login button to be visible' })
        loginButton.click()
        browser.pause(500)
    }
}
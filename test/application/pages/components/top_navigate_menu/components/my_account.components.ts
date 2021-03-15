export class MyAccount {
    myAccountDropDown: any
    constructor(private root: WebdriverIO.Element) {
        this.myAccountDropDown = this.root.$('.dropdown')
    }
    openLogin() {
        this.myAccountDropDown.isDisplayed()
        this.myAccountDropDown.click()
        const loginButtonFromDropDown = this.myAccountDropDown.$('.dropdown-menu a[href$="login"]')
        loginButtonFromDropDown.isDisplayed()
        loginButtonFromDropDown.click()
        browser.pause(1000)
    }
    openRegistere() {
        throw new Error('Method not finished')
    }
    logout() {
        const logoutButton = this.myAccountDropDown.$('.dropdown-menu a[href$="logout"]')
        browser.pause(1000)
        logoutButton.click()
        browser.pause(1000)
        expect(browser).toHaveUrlContaining('/index.php?route=account/logout')
    }
}
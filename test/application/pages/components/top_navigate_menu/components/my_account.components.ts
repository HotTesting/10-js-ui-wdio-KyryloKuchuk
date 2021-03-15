
export class MyAccount {
    myAccountDropDown: any
 
    constructor(private root: WebdriverIO.Element) {
        this.myAccountDropDown = this.root.$('.dropdown')
    }
    openMyAccountDropDown() {
        this.myAccountDropDown.isDisplayed()
        this.myAccountDropDown.click()
    }
    openLogin() {
        this.openMyAccountDropDown()
        const loginButtonFromDropDown = this.myAccountDropDown.$('.dropdown-menu a[href$="login"]')
        loginButtonFromDropDown.isDisplayed()
        loginButtonFromDropDown.click()
        browser.pause(1000)
    }
    openRegistere() {
        throw new Error('Method not finished')
    }
    logout() {
        this.openMyAccountDropDown()
        const logoutButton = this.myAccountDropDown.$('.dropdown-menu a[href$="logout"]')
        logoutButton.isDisplayed()
        logoutButton.click()
        browser.pause(1000)
        expect(browser).toHaveUrlContaining('/index.php?route=account/logout')
    }
}

export class MyAccountComponent {
    myAccountDropDown: any
 
    constructor(private root: WebdriverIO.Element) {
        this.myAccountDropDown = this.root.$('.dropdown')
    }
    openMyAccountDropDown() {
        this.myAccountDropDown.isClickable()
        this.myAccountDropDown.click()
    }
    openLogin() {
        this.openMyAccountDropDown()
        const loginButtonFromDropDown = this.myAccountDropDown.$('.dropdown-menu a[href$="login"]')
        loginButtonFromDropDown.isClickable()
        loginButtonFromDropDown.click()
        expect(browser).toHaveUrlContaining('/index.php?route=account/login');
    }
    openRegistere() {
        throw new Error('Method not finished')
    }
    logout() {
        this.openMyAccountDropDown()
        const logoutButton = this.myAccountDropDown.$('.dropdown-menu a[href$="logout"]')
        logoutButton.isClickable()
        logoutButton.click()
        expect(browser).toHaveUrlContaining('/index.php?route=account/logout')
    }
}
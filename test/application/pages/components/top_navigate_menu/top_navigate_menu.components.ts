import { MyAccount } from "./components/my_account.components"

export class TopNavigateMenuComponent {
    myAccount: MyAccount

    constructor() {
        this.myAccount = new MyAccount(this.root)
    }

    private get root(): WebdriverIO.Element {
        return $('nav#top')
    }
    
    openCheckout() {
        this.root.$('a[title="Checkout"]').click()
        expect(browser).toHaveUrlContaining('/index.php?route=checkout/checkout')
    }
}
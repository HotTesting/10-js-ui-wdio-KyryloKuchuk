import { MyAccountComponent } from "./components/my_account.components"

export class TopNavigateMenuComponent {
    myAccountComponent: MyAccountComponent

    constructor() {
        this.myAccountComponent = new MyAccountComponent(this.root)
    }

    private get root(): WebdriverIO.Element {
        return $('nav#top')
    }
    
    openCheckout() {
        this.root.$('a[title="Checkout"]').click()
        expect(browser).toHaveUrlContaining('/index.php?route=checkout/checkout')
    }
}
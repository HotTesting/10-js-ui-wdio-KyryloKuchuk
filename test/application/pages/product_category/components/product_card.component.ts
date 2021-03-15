export class ProductCardComponent {
    constructor(private root: WebdriverIO.Element) {
    }
    title(): string {
        return this.root.$('h4').getText();
    }

    addToCart(index) {
        const addToCardButton = this.root.$(`#content .row .product-layout:nth-child(${index}) [onclick^="cart.add"]`);
        addToCardButton.scrollIntoView(false);
        //HOW: Can't replace pause to toBeDisplayed() or isClickable() becouse there is croll , if I change it  the tests falile
        browser.pause(1000);
        addToCardButton.click();
    }

    addToWishList(index) {
        const productWishListButton = this.root.$(`#content .row .product-layout:nth-child(${index}) [data-original-title="Add to Wish List"]`)
        productWishListButton.scrollIntoView(false);
        //HOW: Can't replace pause to toBeDisplayed() or isClickable() becouse there is croll , if I change it  the tests falile
        browser.pause(1000);
        productWishListButton.click();
    }

    compareThisProduct(index) {
        const comparisonButton = this.root.$(`#content .row .product-layout:nth-child(${index}) [data-original-title="Compare this Product"]`);
        comparisonButton.scrollIntoView(false);
        //HOW: Can't replace pause to toBeDisplayed() or isClickable() becouse there is croll , if I change it  the tests falile
        browser.pause(1000);
        comparisonButton.click();
    }
}
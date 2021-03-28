export class ProductCardComponent {
    constructor(private root: WebdriverIO.Element) {
    }
    title(): string {
        return this.root.$('h4').getText();
    }

    addToCart(index) {
        const addToCardButton = $(`#content .row .product-layout:nth-child(${index}) [onclick^="cart.add"]`);
        addToCardButton.scrollIntoView(false);
        browser.pause(1000);
        addToCardButton.click();
    }

    addToWishList(index) {
        const productWishListButton = $(`#content .row .product-layout:nth-child(${index}) [data-original-title="Add to Wish List"]`)
        productWishListButton.scrollIntoView(false);
        browser.pause(1000);
        productWishListButton.click();
    }

    compareThisProduct(index) {
        const comparisonButton = $(`#content .row .product-layout:nth-child(${index}) [data-original-title="Compare this Product"]`);
        comparisonButton.scrollIntoView(false);
        browser.pause(1000);
        comparisonButton.click();
    }
}
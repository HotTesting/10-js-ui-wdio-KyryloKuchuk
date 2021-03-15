export class ProductCardComponent {
    constructor(private root: WebdriverIO.Element) {
    }
    title(): string {
        return this.root.$('h4').getText();
    }

    addToCart() {
        const addToCartButton = this.root.$('button[onclick*="cart.add"] i.fa-shopping-cart')
        expect(addToCartButton).toBeVisible({ message: 'Expected add to cart button to be visible' })
        addToCartButton.click()
        browser.pause(500)
    }

    addToWishList(index) {
        const productWishListButton = this.root.$(`#content .row .product-layout:nth-child(${index}) [data-original-title="Add to Wish List"]`)
        productWishListButton.scrollIntoView(false);
        browser.pause(1000);
        productWishListButton.click();
    }

    compareThisProduct() {
        throw new Error('Not yet implemented')
    }
}

import { TopNavigateMenuComponent } from "../components/top_navigate_menu/top_navigate_menu.components"
import { ProductCardComponent } from "./components/product_card.component"

export class ProductCategoryPage {
    topNavigateMenuComponent: TopNavigateMenuComponent
    productCardComponent: ProductCardComponent
    constructor() {
        this.topNavigateMenuComponent = new TopNavigateMenuComponent()
        this.productCardComponent = new ProductCardComponent(this.root)
    }
    private get root(): WebdriverIO.Element {
        return $('#product-category')
    }

    getProductsList() {
        const productList = $('#product-category')
        let elementsArray = []
        const lengthListResult = $$('#content .row .product-layout').length
        for (var currentElement = 1; currentElement < lengthListResult+1; currentElement++) {
            let element = productList.$(`#content .row .product-layout:nth-child(${currentElement}) .caption a[href^="http"]`)
            if (element) {
                elementsArray.push({
                    index:currentElement,
                    link:element.getAttribute('href'),
                    text:element.getText(),
                })
            }

        }
        return elementsArray
    }

}

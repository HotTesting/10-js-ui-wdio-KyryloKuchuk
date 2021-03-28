import { ItemOptionsComponet } from "./components/item_options.component"

export class ItemPage {

    itemOptionsComponet:ItemOptionsComponet
    constructor() {
        this.itemOptionsComponet = new ItemOptionsComponet()
    }
    onItemPage(itemName:string){
        expect(browser).toHaveUrlContaining(itemName)
    }
    addToCart(){
        const addToCartButton = $('#button-cart')
        addToCartButton.isClickable()
        addToCartButton.click()
    }

}

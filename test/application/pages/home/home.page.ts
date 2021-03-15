import { SearchComponent } from "../components/search.components"
import { TopNavigateMenuComponent } from "../components/top_navigate_menu/top_navigate_menu.components"

export class HomePage {
    topNavigateMenuComponent: TopNavigateMenuComponent
    searchComponent: SearchComponent
    constructor() {
        this.topNavigateMenuComponent = new TopNavigateMenuComponent()
        this.searchComponent = new SearchComponent()
    }
    openAllForCategoryMP3() {
        const navBar = $('.collapse .nav')
        const mp3PlayersDropDown = navBar.$('a[href$="mp3-players"]')
        expect(mp3PlayersDropDown).toBeDisplayed()
        mp3PlayersDropDown.click()
        const showAll = navBar.$('a[href$="mp3-players"].see-all')
        expect(showAll).toBeDisplayed()
        showAll.click()
        console.log('Open page with products')
        expect(browser).toHaveUrlContaining('/mp3-players')
        const lengthListResult = $$('#content .row .product-layout').length
        console.log(`Count displayed elemets in products list = ${lengthListResult} it's more than 1`)
        expect(lengthListResult > 1).toBeTruthy()
    }
    
}
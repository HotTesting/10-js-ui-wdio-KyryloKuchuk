import { TopNavigateMenu } from "../components/top_navigate_menu/top_navigate_menu.components"

export class HomePage {
    topNavigateMenu: TopNavigateMenu
    constructor() {
        this.topNavigateMenu = new TopNavigateMenu()
    }
    openAllForCategoryMP3() {
        const navBar = $('.collapse .nav')
        const mp3PlayersDropDown = navBar.$('a[href$="mp3-players"]')
        expect(mp3PlayersDropDown).toBeDisplayed()
        mp3PlayersDropDown.click()
        browser.pause(1000)
        const showAll = navBar.$('a[href$="mp3-players"].see-all')
        expect(showAll).toBeDisplayed()
        showAll.click()
        browser.pause(1000)
        console.log('Open page with products')
        expect(browser).toHaveUrl(`${browser.config.baseUrl}/mp3-players`)
        const lengthListResult = $$('#content .row .product-layout').length
        console.log(`Count displayed elemets in products list = ${lengthListResult} it's more than 1`)
        expect(lengthListResult > 1).toBeTruthy()
    }
}
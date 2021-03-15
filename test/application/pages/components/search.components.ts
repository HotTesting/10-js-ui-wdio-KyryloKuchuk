
export class SearchComponent {
    constructor() {

    }

    private get root(): WebdriverIO.Element {
        return $('.input-group [name= "search"]')
    }
    
    fillingSearch(value: string) {
        expect(this.root).toBeClickable()
        this.root.setValue(value)
    }
    search(value: string) {
        const buttonSearch = $('.input-group-btn .fa-search');
        buttonSearch.click();
        expect(browser).toHaveUrlContaining(`/index.php?route=product/search&search=${value}`)
    }
}
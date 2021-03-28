import getText from "../../../../node_modules/webdriverio/build/commands/element/getText"

export class CartComponent {
    constructor() {

    }

    private get root(): WebdriverIO.Element {
        return $('.col-sm-3 .btn-group [data-toggle=dropdown]')
    }

    displayedValueOnButton() {
        expect(this.root).toBeClickable()
        return this.root.getText()
    }
    openDropDown() {
        expect(this.root).toBeClickable()
        this.root.click()
    }
    cartDropDownItemsCount() {
        const itemsCount = $('.dropdown-menu .table-striped tbody').$$('tr').length
        return itemsCount
    }
    cartDropDownTotal() {
        const total = $('.dropdown-menu .table-bordered tbody tr:nth-child(4) > td:nth-child(2)')
        const totalAmount = parseFloat(total.getText().replace('$',''))
        return totalAmount
    }
}
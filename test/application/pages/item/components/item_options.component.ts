
export class ItemOptionsComponet {

    private get root(): WebdriverIO.Element {
        return $('#product')
    }
    getDeliveryDate() {
        const dateField = this.root.$('.input-group.date input')
        dateField.isClickable()
        return dateField.getValue()
    }
    setDeliveryDate(newDeliveryDate:string) {
        const dateField = this.root.$('.input-group.date input')
        dateField.isClickable()
        dateField.clearValue()
        dateField.setValue(newDeliveryDate)
    }
    setQuantity(quantity:number) {
        const quantityField = this.root.$('[name="quantity"]')
        quantityField.isClickable()
        quantityField.setValue(quantity)
    }
    getQuantity(quantity:number) {
        const quantityField = this.root.$('[name="quantity"]')
        quantityField.isClickable()
        return quantityField.gettValue()
    }
}
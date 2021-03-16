
export class ProductReturnsPage {
    isOpened(): boolean {
        throw new Error('Not implemented yet')
    }
    private get root(): WebdriverIO.Element {
        return $('#account-return')
    }
    fillingProductReturnsFields(
        data: {
            firstName: string,
            lastName: string,
            email: string,
            telephone: string,
            orderID: string,
            product: string,
            productCode: string,
            reasonForReturn: string,
            productIsOpened: string,
            comment: string
        }
    ) {
        console.log('[product_returns.page] Filling return product fields', JSON.stringify(data, null, 2))

        const firstName = this.root.$('#input-firstname')
        expect(firstName).toBeClickable()
        firstName.setValue(data.firstName)

        const lastName = this.root.$('#input-lastname')
        expect(lastName).toBeClickable()
        lastName.setValue(data.lastName)

        const email = this.root.$('#input-email')
        expect(email).toBeClickable()
        email.setValue(data.email)

        const telephone = this.root.$('#input-telephone')
        expect(telephone).toBeClickable()
        telephone.setValue(data.telephone)

        const orderID = this.root.$('#input-order-id')
        expect(orderID).toBeClickable()
        orderID.setValue(data.orderID)

        const product = this.root.$('#input-product')
        expect(product).toBeClickable()
        product.setValue(data.product)

        const productCode = this.root.$('#input-model')
        expect(productCode).toBeClickable()
        productCode.setValue(data.productCode)

        const reasonForReturn = this.root.$(`.radio > label input[value ="${data.reasonForReturn}"]`)
        expect(reasonForReturn).toBeClickable()
        reasonForReturn.click()

        const productIsOpened = this.root.$(`.radio-inline [value="${data.productIsOpened}"]`)
        expect(productIsOpened).toBeClickable()
        productIsOpened.click()
        const comment = this.root.$('#input-comment')
        expect(comment).toBeClickable()
        comment.setValue(data.comment)

    }
    emptyFormValidation() {
        const firstName = this.root.$('#input-firstname')
        expect(firstName).toBeDisplayed()
        const firstNameValidationError = this.root.$('#input-firstname ~ .text-danger')
        expect(firstNameValidationError).toHaveTextContaining('First Name must be between 1 and 32 characters!')

        const lastName = this.root.$('#input-lastname')
        expect(lastName).toBeDisplayed()
        const lastNameValidationError = this.root.$('#input-lastname ~ .text-danger')
        expect(lastNameValidationError).toHaveTextContaining('Last Name must be between 1 and 32 characters!')

        const email = this.root.$('#input-email')
        expect(email).toBeDisplayed()
        const emailValidationError = this.root.$('#input-email ~ .text-danger')
        expect(emailValidationError).toHaveTextContaining('E-Mail Address does not appear to be valid!')

        const telephone = this.root.$('#input-telephone')
        expect(telephone).toBeDisplayed()
        const telephoneValidationError = this.root.$('#input-telephone ~ .text-danger')
        expect(telephoneValidationError).toHaveTextContaining('Telephone must be between 3 and 32 characters!')

        const orderID = this.root.$('#input-order-id')
        expect(orderID).toBeDisplayed()
        const orderIDValidationError = this.root.$('#input-order-id ~ .text-danger')
        expect(orderIDValidationError).toHaveTextContaining('Order ID required!')

        const product = this.root.$('#input-product')
        expect(product).toBeDisplayed()
        const productValidationError = this.root.$('#input-product ~ .text-danger')
        expect(productValidationError).toHaveTextContaining('Product Name must be greater than 3 and less than 255 characters!')

        const productCode = this.root.$('#input-model')
        expect(productCode).toBeDisplayed()
        const productCodeValidationError = this.root.$('#input-model ~ .text-danger')
        expect(productCodeValidationError).toHaveTextContaining('Product Model must be greater than 3 and less than 64 characters!')

        const reasonForReturn = this.root.$('.radio')
        expect(reasonForReturn).toBeDisplayed()
        const reasonForReturnValidationError = this.root.$('.radio ~ .text-danger')
        expect(reasonForReturnValidationError).toHaveTextContaining('You must select a return product reason!')

        const productIsOpened = this.root.$('.radio-inline [checked = checked]')
        expect(productIsOpened).toBeDisplayed()
        const productIsOpenedDefaultValue = this.root.$('.radio-inline [value = "0"]')
        productIsOpenedDefaultValue.isSelected()
    }
    submit() {
        const buttonSubmit = this.root.$('.buttons [type=submit]')
        expect(buttonSubmit).toBeClickable({ message: 'Expected Continue button to be visible' })
        buttonSubmit.click()
    }
}

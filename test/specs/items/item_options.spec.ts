import { App } from '../../application/application'
import { ApiClient } from '../../application/api/apiClient'
import { addDays } from 'date-fns'

var Faker = require('Faker');

describe('Item options', function () {
    var arrayDisplayedElements = []
    describe('delivery date and quantity', function () {
        beforeEach(function () {
            const app = new App()
            let userData = {
                firstName: Faker.name.firstName(),
                lastName: Faker.name.lastName(),
                email: Faker.internet.email(),
                telephone: Faker.random.number({
                    'min': 123456789,
                    'max': 999999999
                }),
                password: Faker.random.number({
                    'min': 123456,
                    'max': 999999
                }),
                newsLetter: 0,
                agree: 1
            }
            const user = new ApiClient().createNewUser(userData)
            browser.url('/')
        })
        
        it('Specify delivery options and checkout item', function () {
            const app = new App()
            const itemName = 'LP3065';
            app.home.searchComponent.fillingSearch(itemName)
            app.home.searchComponent.search(itemName)
            const arrayDisplayedElements = app.productCategory.getProductsList()

            app.productCategory.productCardComponent.addToCart(1)
            app.itemPage.onItemPage(itemName)
            const newDeliveryDate = addDays(new Date, 5).toISOString().slice(0, 10)
            app.itemPage.itemOptionsComponet.setDeliveryDate(newDeliveryDate)
            expect(app.itemPage.itemOptionsComponet.getDeliveryDate()).toEqual(newDeliveryDate)
            const itemQuantity = 2
            app.itemPage.itemOptionsComponet.setQuantity(itemQuantity)
            app.itemPage.addToCart()
            const successAddedAllert = $('#product-product .alert-success');
            successAddedAllert.isDisplayedInViewport();
            const amountItems = parseFloat(arrayDisplayedElements[0].price.replace('$',''))
            const expectedAmountOfAllItems = (amountItems * 2).toFixed(2)
            expect(app.home.cartComponent.displayedValueOnButton()).toEqual(`${itemQuantity} item(s) - $${expectedAmountOfAllItems}`)
        })

    
        afterEach(function () {
            const app = new App()
            app.home.topNavigateMenuComponent.myAccountComponent.logout()
        })
    })
})
// import users from '../../fixtures/static/users'
import { App } from '../../application/application'
import { ApiClient } from '../../application/api/apiClient'
var Faker = require('Faker');

describe('Item options', function () {
    var arrayDisplayedElements = []
    describe('Checkout items with delivery options', function () {
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
            app.home.openAllForCategoryMP3()
            arrayDisplayedElements = app.productCategory.getProductsList()
        })
        
        it('Specify delivery options and checkout item', function () {
            const app = new App()
            const searchValue = 'HP LP3065';
            app.home.searchComponent.fillingSearch(searchValue)
            app.home.searchComponent.search(searchValue)
            app.productCategory.productCardComponent.addToCart(0)
            // const successAddedAllert = $('#product-category .alert-success');
            // successAddedAllert.isDisplayedInViewport();
            // expect(successAddedAllert).toHaveTextContaining(arrayDisplayedElements[currentElement].text);
            // expect(successAddedAllert).toHaveTextContaining('shopping cart');
            // expect(successAddedAllert).not.toHaveTextContaining('login');
            // expect(successAddedAllert).not.toHaveTextContaining('create an account');

            // expect(app.home.cartComponent.displayedValueOnButton()).toEqual(`${countAddedItems} item(s) - $${expectedAmountOfAllItems.toFixed(2)}`)
            // app.home.cartComponent.openDropDown()
            // expect(app.home.cartComponent.cartDropDownItemsCount()).toEqual(countAddedItems)
            // expect(app.home.cartComponent.cartDropDownTotal()).toEqual(expectedAmountOfAllItems)
        })

    
        afterEach(function () {
            const app = new App()
            app.home.topNavigateMenuComponent.myAccount.logout()
        })
    })
})
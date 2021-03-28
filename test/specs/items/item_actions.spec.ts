import { App } from '../../application/application'
import { ApiClient } from '../../application/api/apiClient'
var Faker = require('Faker');

describe('Items', function () {
    var arrayDisplayedElements = []
    describe('Action with items by registered user', function () {
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
        
        it('Product can be added to cart', function () {
            const app = new App()
            let countAddedItems = 0;
            let expectedAmountOfAllItems = 0;
            for (let currentElement = 0; currentElement < arrayDisplayedElements.length; currentElement++) {
                app.productCategory.productCardComponent.addToCart(arrayDisplayedElements[currentElement].index)
                let price = parseFloat(arrayDisplayedElements[currentElement].price.replace('$',''))
                expectedAmountOfAllItems += price
                countAddedItems++
                const successAddedAllert = $('#product-category .alert-success');
                successAddedAllert.isDisplayedInViewport();
                expect(successAddedAllert).toHaveTextContaining(arrayDisplayedElements[currentElement].text);
                expect(successAddedAllert).toHaveTextContaining('shopping cart');
                expect(successAddedAllert).not.toHaveTextContaining('login');
                expect(successAddedAllert).not.toHaveTextContaining('create an account');
            }
            expect(app.home.cartComponent.displayedValueOnButton()).toEqual(`${countAddedItems} item(s) - $${expectedAmountOfAllItems.toFixed(2)}`)
            app.home.cartComponent.openDropDown()
            expect(app.home.cartComponent.cartDropDownItemsCount()).toEqual(countAddedItems)
            expect(app.home.cartComponent.cartDropDownTotal()).toEqual(expectedAmountOfAllItems)
        })

        it('Product can be selected for comparison', function () {
            const app = new App()
            for (let currentElement = 0; currentElement < arrayDisplayedElements.length; currentElement++) {
                app.productCategory.productCardComponent.compareThisProduct(arrayDisplayedElements[currentElement].index)
                const successAddedAllert = $('#product-category .alert-success');
                successAddedAllert.isDisplayedInViewport();
                expect(successAddedAllert).toHaveTextContaining(arrayDisplayedElements[currentElement].text);
                expect(successAddedAllert).toHaveTextContaining('product comparison');
                expect(successAddedAllert).not.toHaveTextContaining('login');
                expect(successAddedAllert).not.toHaveTextContaining('create an account');
            }
        })
        it('Product can be added to cart', function () {
            const app = new App()
            for (let currentElement = 0; currentElement < arrayDisplayedElements.length; currentElement++) {
                app.productCategory.productCardComponent.addToCart(arrayDisplayedElements[currentElement].index)
                const successAddedAllert = $('#product-category .alert-success');
                successAddedAllert.isDisplayedInViewport();
                expect(successAddedAllert).toHaveTextContaining(arrayDisplayedElements[currentElement].text);
                expect(successAddedAllert).toHaveTextContaining('shopping cart');
                expect(successAddedAllert).not.toHaveTextContaining('login');
                expect(successAddedAllert).not.toHaveTextContaining('create an account');
            }
        })     
        afterEach(function () {
            const app = new App()
            app.home.topNavigateMenuComponent.myAccountComponent.logout()
        })
    })
    describe('Action with items by guest', function () {
        beforeEach(function () {
            const app = new App()
            app.home.openAllForCategoryMP3()
            arrayDisplayedElements = app.productCategory.getProductsList()
        });
        it('Product can be selected for comparison', function () {
            const app = new App()
            for (let currentElement = 0; currentElement < arrayDisplayedElements.length; currentElement++) {
                app.productCategory.productCardComponent.compareThisProduct(arrayDisplayedElements[currentElement].index)
                const successAddedAllert = $('#product-category .alert-success');
                successAddedAllert.isDisplayedInViewport();
                expect(successAddedAllert).toHaveTextContaining(arrayDisplayedElements[currentElement].text);
                expect(successAddedAllert).toHaveTextContaining('product comparison');
                expect(successAddedAllert).not.toHaveTextContaining('login');
                expect(successAddedAllert).not.toHaveTextContaining('create an account');
            }
        })

        it('Product can be added to cart', function () {
            const app = new App()
            for (let currentElement = 0; currentElement < arrayDisplayedElements.length; currentElement++) {
                app.productCategory.productCardComponent.addToCart(arrayDisplayedElements[currentElement].index)
                const successAddedAllert = $('#product-category .alert-success');
                successAddedAllert.isDisplayedInViewport();
                expect(successAddedAllert).toHaveTextContaining(arrayDisplayedElements[currentElement].text);
                expect(successAddedAllert).toHaveTextContaining('shopping cart');
                expect(successAddedAllert).not.toHaveTextContaining('login');
                expect(successAddedAllert).not.toHaveTextContaining('create an account');
            }
        })
    }); 
})
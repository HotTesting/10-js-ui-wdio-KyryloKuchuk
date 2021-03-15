import users from '../../fixtures/static/users'
import { App } from '../../application/application'

describe('Items', function () {
    var arrayDisplayedElements = []
    describe('Action with items by registered user', function () {
        beforeEach(function () {
            const app = new App()
            app.home.topNavigateMenuComponent.myAccount.openLogin()
            app.login.fillingLoginFields({
                emailAddressAsLogin: users.registeredUser1.email,
                password: users.registeredUser1.password
            })
            app.login.login()
            app.home.openAllForCategoryMP3()
            arrayDisplayedElements = app.productCategory.getProductsList()
        })
        
        it('Product can be selected for wishlist', function () {
            const app = new App()
            for (let currentElement = 0; currentElement < arrayDisplayedElements.length; currentElement++) {
                app.productCategory.productCardComponent.addToWishList(arrayDisplayedElements[currentElement].index)
                const successAddedAllert = $('#product-category .alert-success');
                successAddedAllert.isDisplayedInViewport();
                expect(successAddedAllert).toHaveTextContaining(arrayDisplayedElements[currentElement].text);
                expect(successAddedAllert).toHaveTextContaining('wish list');
            }
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
            app.home.topNavigateMenuComponent.myAccount.logout()
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
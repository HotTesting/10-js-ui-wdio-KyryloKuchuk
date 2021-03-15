import users from '../../fixtures/static/users'
import { App } from '../../application/application'

describe('Items', function () {
    var arrayDisplayedElements = []
    beforeEach(function () {
        browser.url('/');
        browser.pause(1000);
        console.log('Open login page');
    })
    describe('Action with items by registered user', function () {
        beforeEach(function () {
            const app = new App()
            app.home.topNavigateMenu.myAccount.openLogin()
            browser.pause(1000);
            expect(browser).toHaveUrl(`${browser.config.baseUrl}/index.php?route=account/login`);
            browser.pause(1000);
            app.login.fillingLoginFields({
                emailAddressAsLogin: users.registeredUser1.email,
                password: users.registeredUser1.password
            })
            app.login.login()
            browser.pause(2000);
            expect(browser).toHaveUrl(`${browser.config.baseUrl}/index.php?route=account/account`);
            app.home.openAllForCategoryMP3()
            arrayDisplayedElements = app.productCategory.getProductsList()
        })
        
        it('Product can be selected for comparison', function () {
            const app = new App()
            for (let currentElement = 0; currentElement < arrayDisplayedElements.length; currentElement++) {
                app.productCategory.productCardComponent.addToWishList(arrayDisplayedElements[currentElement].index)
                const successAddedAllert = $('#product-category .alert-success');
                successAddedAllert.isDisplayedInViewport();
                //TODO: How expect full displayed text which contain link, but displayed text
                //TODO: How expect multiple containing in string, array isn't work, because issue with the types
                expect(successAddedAllert).toHaveTextContaining(arrayDisplayedElements[currentElement].text);
                expect(successAddedAllert).toHaveTextContaining('wish list');
            }
        })
        
        afterEach(function () {
        })
    })
})
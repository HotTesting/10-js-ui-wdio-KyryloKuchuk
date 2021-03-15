import users from '../../fixtures/static/users'
import { App } from '../../application/application'

function loginByUi(user) {
    browser.url('/');
    browser.pause(1000);
    console.log('Open login page');
    const app = new App()
    app.home.topNavigateMenu.myAccount.openLogin()
    browser.pause(1000);
    expect(browser).toHaveUrl(`${browser.config.baseUrl}/index.php?route=account/login`);
    browser.pause(1000);

    // const loginForm = $('#content');
    // console.log('Put login value');
    // const emailAddressAsLogin = loginForm.$('#input-email');
    // emailAddressAsLogin.setValue(user.email);

    // console.log('Put password value');
    // const password = loginForm.$('#input-password');
    // password.setValue(user.password);

    // console.log('Click login button');
    // const loginButtonOnLoginPage = loginForm.$('.btn[value="Login"]');
    //loginButtonOnLoginPage.click();
    app.login.fillingLoginFields({
        emailAddressAsLogin: users.registeredUser1.email,
        password: users.registeredUser1.password
    })
    app.login.login()
    browser.pause(2000);
    expect(browser).toHaveUrl(`${browser.config.baseUrl}/index.php?route=account/account`);
};
function logoutByUi() {
    const app = new App()
    //const user = users.registeredUser1
    app.home.topNavigateMenu.myAccount.logout()
};
function createArrayOfElements() {
    const productList = $('#product-category')
    let elementsArray = [];
    const lengthListResult = $$('#content .row .product-layout').length;
    for (var currentElement = 1; currentElement < lengthListResult+1; currentElement++) {
        let element = productList.$(`#content .row .product-layout:nth-child(${currentElement}) .caption a[href^="http"]`);
        if (element) {
            elementsArray.push({
                index:currentElement,
                link:element.getAttribute('href'),
                text:element.getText(),
            });
        }

    }
    return elementsArray
}
function openProductList() {
    const navBar = $('.collapse .nav')
    const mp3PlayersDropDown = navBar.$('a[href$="mp3-players"]')
    mp3PlayersDropDown.click();
    browser.pause(1000);
    const showAll = navBar.$('a[href$="mp3-players"].see-all');
    showAll.click();
    browser.pause(1000);
    console.log('Open page with products');
    expect(browser).toHaveUrl(`${browser.config.baseUrl}/mp3-players`);
    const lengthListResult = $$('#content .row .product-layout').length;
    console.log(`Count displayed elemets in products list = ${lengthListResult} it's more than 1`);
    expect(lengthListResult > 1).toBeTruthy();
}
describe('Items', function () {
    var arrayDisplayedElements = [];
    // You must be logged in to use wishlist
    describe('Action with items by registered user', function () {
        beforeEach(function () {
            const user = users.registeredUser1;
            loginByUi(user);
            //TODO: Need change precondition in case of registered user this step is useless
            openProductList();
            arrayDisplayedElements = createArrayOfElements();
        });
        // it(`Product can be added to wishlist`, function () {
        //     //TODO: Need to move cycle before 'it', and check by iteration 'it' 
        //     for (let currentElement = 0; currentElement < arrayDisplayedElements.length; currentElement++) {
        //         const productList = $('#product-category');
        //         let productWishListButton = productList.$(`#content .row .product-layout:nth-child(${arrayDisplayedElements[currentElement].index}) [data-original-title="Add to Wish List"]`);
        //         productWishListButton.scrollIntoView(false);
        //         browser.pause(1000);
        //         productWishListButton.click();

        //         const successAddedAllert = productList.$('#product-category .alert-success');
        //         successAddedAllert.isDisplayedInViewport();
        //         //TODO: How expect full displayed text which contain link, but displayed text
        //         //TODO: How expect multiple containing in string, array isn't work, because issue with the types
        //         expect(successAddedAllert).toHaveTextContaining(arrayDisplayedElements[currentElement].text);
        //         expect(successAddedAllert).toHaveTextContaining('wish list');
        //     }
            
        // })
        // it('Product can be selected for comparison', function () {
        //     //TODO: Need to move cycle before 'it', and check by iteration 'it' 
        //     for (let currentElement = 0; currentElement < arrayDisplayedElements.length; currentElement++) {
        //         const productList = $('#product-category');
        //         let comparisonButton = productList.$(`#content .row .product-layout:nth-child(${arrayDisplayedElements[currentElement].index}) [data-original-title="Compare this Product"]`);
        //         comparisonButton.scrollIntoView(false);
        //         browser.pause(1000);
        //         comparisonButton.click();

        //         const successAddedAllert = productList.$('#product-category .alert-success');
        //         successAddedAllert.isDisplayedInViewport();
        //         //TODO:Change expect as 73-74 row,after rewiew
        //         expect(successAddedAllert).toHaveTextContaining(arrayDisplayedElements[currentElement].text);
        //         expect(successAddedAllert).toHaveTextContaining('product comparison');
        //         expect(successAddedAllert).not.toHaveTextContaining('login');
        //         expect(successAddedAllert).not.toHaveTextContaining('create an account');
        //     }
        // })
        it('Product can be added to cart', function () {
            //TODO: Need to move cycle before 'it', and check by iteration 'it' 
            for (let currentElement = 0; currentElement < arrayDisplayedElements.length; currentElement++) {
                const productList = $('#product-category');
                //TODO: Need to change selector
                let addToCardButton = productList.$(`#content .row .product-layout:nth-child(${arrayDisplayedElements[currentElement].index}) [onclick^="cart.add"]`);
                addToCardButton.scrollIntoView(false);
                browser.pause(1000);
                addToCardButton.click();

                const successAddedAllert = productList.$('#product-category .alert-success');
                successAddedAllert.isDisplayedInViewport();
                //TODO:Change expect as 73-74 row,after rewiew
                expect(successAddedAllert).toHaveTextContaining(arrayDisplayedElements[currentElement].text);
                expect(successAddedAllert).toHaveTextContaining('shopping cart');
                expect(successAddedAllert).not.toHaveTextContaining('login');
                expect(successAddedAllert).not.toHaveTextContaining('create an account');
            }
        })
        afterEach(function () {
            logoutByUi();
        });
    });
    describe('Action with items by guest', function () {
        beforeEach(function () {
            browser.url('/');
            browser.pause(1000);
            console.log('Open login page');
            openProductList();
            arrayDisplayedElements = createArrayOfElements();
        });
        it('Product can be selected for comparison', function () {
            for (let currentElement = 0; currentElement < arrayDisplayedElements.length; currentElement++) {
                const productList = $('#product-category');
                let productWishListButton = productList.$(`#content .row .product-layout:nth-child(${arrayDisplayedElements[currentElement].index}) [data-original-title="Add to Wish List"]`);
                productWishListButton.scrollIntoView(false);
                browser.pause(1000);
                productWishListButton.click();

                const successAddedAllert = productList.$('#product-category .alert-success');
                successAddedAllert.isDisplayedInViewport();
                //TODO: How expect full displayed text which contain link, but displayed text
                //TODO: How expect multiple containing in string, array isn't work, because issue with the types
                expect(successAddedAllert).toHaveTextContaining(arrayDisplayedElements[currentElement].text);
                expect(successAddedAllert).toHaveTextContaining('wish list');
                expect(successAddedAllert).toHaveTextContaining('login');
                expect(successAddedAllert).toHaveTextContaining('create an account');
            }
        })

        it('Product can be added to cart', function () {
            for (let currentElement = 0; currentElement < arrayDisplayedElements.length; currentElement++) {
                const productList = $('#product-category');
                //TODO: Need to change selector
                let addToCartButton = productList.$(`#content .row .product-layout:nth-child(${arrayDisplayedElements[currentElement].index}) [onclick^="cart.add"]`);
                addToCartButton.scrollIntoView(false);
                browser.pause(1000);
                addToCartButton.click();

                const successAddedAllert = productList.$('#product-category .alert-success');
                successAddedAllert.isDisplayedInViewport();
                //TODO:Change expect as 73-74 row,after rewiew
                expect(successAddedAllert).toHaveTextContaining(arrayDisplayedElements[currentElement].text);
                expect(successAddedAllert).toHaveTextContaining('shopping cart');
                expect(successAddedAllert).not.toHaveTextContaining('login');
                expect(successAddedAllert).not.toHaveTextContaining('create an account');
            }
        })
        afterEach(function () {
           
        });
    }); 
});
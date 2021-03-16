import { App } from "../../application/application"
import users from '../../fixtures/static/users'

var Faker = require('Faker');
describe('Checkout item', function () {
    describe('Checkout by register user', function () {
        beforeEach(function () {
            const app = new App()
            app.home.topNavigateMenuComponent.myAccount.openLogin()
            app.login.fillingLoginFields({
                emailAddressAsLogin: users.registeredUser1.email,
                password: users.registeredUser1.password
            })
            app.login.login()
        })
        it('can be purchased with different delivery and shipment address', function () {
            const app = new App()

            app.home.openAllForCategoryMP3()
            const iPodClassic = app.productCategory.getProductsList().find(product => product.text === 'iPod Classic')
            expect(iPodClassic).toBeDefined()

            app.productCategory.productCardComponent.addToCart(iPodClassic.index)

            app.productCategory.topNavigateMenuComponent.openCheckout();

            app.checkout.billingDetails.fillBillingDetails({
                newAddress: true,
                registerUser: true,
                firstName: Faker.name.firstName(),
                lastName: Faker.name.lastName(),
                email: null,
                telephone: null,
                address1: Faker.address.streetAddress(),
                city: Faker.address.city(),
                postCode: Faker.address.zipCode(),
                country: '220',
                region: '3490',
                sameShippingAddress: false
            })
            app.checkout.billingDetails.continue('registre')

            app.checkout.deliveryDetails.fillDeliveryDetails({
                newAddress: true,
                registerUser: true,
                firstName: Faker.name.firstName(),
                lastName: Faker.name.lastName(),
                company: Faker.company.companyName(),
                address1: Faker.address.streetAddress(),
                city: Faker.address.city(),
                postCode: Faker.address.zipCode(),
                country: '220',
                region: '3490'
            })
            app.checkout.deliveryDetails.continue('registre')
            app.checkout.deliveryMethod.continue()

            app.checkout.paymentMethod.acceptTermsAndConditions()
            app.checkout.paymentMethod.continue()

            app.checkout.confirmOrder.continue()

            browser.waitUntil(() => app.confirmation.isOpened(), {
                timeoutMsg: "Expected confirmation page to be loaded"
            })
        })
        afterEach(function () {
            const app = new App()
            app.home.topNavigateMenuComponent.myAccount.logout()
        })
    })
    describe('Checkout by guest user', function () {
        it('can be purchased with different delivery and shipment address', function () {
            const app = new App()

            app.home.openAllForCategoryMP3()

            const iPodShuffle = app.productCategory.getProductsList().find(product => product.text === 'iPod Shuffle')

            expect(iPodShuffle).toBeDefined()

            app.productCategory.productCardComponent.addToCart(iPodShuffle.index)

            app.productCategory.topNavigateMenuComponent.openCheckout();
            app.checkout.checkoutOptions.selectGuestCheckout()
            app.checkout.checkoutOptions.continue()

            app.checkout.billingDetails.fillBillingDetails({
                newAddress: true,
                registerUser: false,
                firstName: Faker.name.firstName(),
                lastName: Faker.name.lastName(),
                email: Faker.internet.email(),
                telephone: Faker.phone.phoneNumber(),
                address1: Faker.address.streetAddress(),
                city: Faker.address.city(),
                postCode: Faker.address.zipCode(),
                country: '220',
                region: '3490',
                sameShippingAddress: false
            })
            app.checkout.billingDetails.continue('guest')

            app.checkout.deliveryDetails.fillDeliveryDetails({
                newAddress: true,
                registerUser: false,
                firstName: Faker.name.firstName(),
                lastName: Faker.name.lastName(),
                company: Faker.company.companyName(),
                address1: Faker.address.streetAddress(),
                city: Faker.address.city(),
                postCode: Faker.address.zipCode(),
                country: '220',
                region: '3490'
            })
            app.checkout.deliveryDetails.continue('guest')
            app.checkout.deliveryMethod.continue()

            app.checkout.paymentMethod.acceptTermsAndConditions()
            app.checkout.paymentMethod.continue()

            app.checkout.confirmOrder.continue()

            browser.waitUntil(() => app.confirmation.isOpened(), {
                timeoutMsg: "Expected confirmation page to be loaded"
            })
        })
    })
})
   
    

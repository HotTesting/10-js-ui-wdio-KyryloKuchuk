var Faker = require('Faker');
import { App } from '../../application/application'

describe("Contact us form", function () {
    it("must send messages to shop administration", function () {
        browser.url('/index.php?route=information/contact')
        expect(browser).toHaveUrlContaining('/index.php?route=information/contact')
        const app = new App()
        app.contactUs.fillingLoginFields({
            name: Faker.name.firstName(),
            email: Faker.internet.email(),
            enquiry: Faker.random.words()
        })
        app.contactUs.submit()
    });
});
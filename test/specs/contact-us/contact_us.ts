var Faker = require('Faker');

describe("Contact us form", function () {
    it("must send messages to shop administration", function () {
        browser.url('/index.php?route=information/contact');
        browser.pause(1000);
        const infoCotactForm = $('#information-contact');

        const name = infoCotactForm.$('#input-name');
        name.setValue(Faker.name.firstName());

        const email = infoCotactForm.$('#input-email');
        email.setValue(Faker.internet.email());

        const enquiry = infoCotactForm.$('#input-enquiry');
        enquiry.setValue(Faker.random.words());

        const buttonSubmit = infoCotactForm.$('.buttons [value="Submit"]');
        buttonSubmit.click();
        browser.pause(1000);
        expect(browser).toHaveUrlContaining('/index.php?route=information/contact/success');
    });
});
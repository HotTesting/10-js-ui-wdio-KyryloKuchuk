import { App } from '../../application/application'
var Faker = require('Faker')

describe("Product return", function () {
	it("submit empty form", function () {
		browser.url('/index.php?route=account/return/add');
		expect(browser).toHaveUrlContaining('/index.php?route=account/return/add')
		const app = new App()
		app.productReturnsPage.submit()
		app.productReturnsPage.emptyFormValidation()
	});

	it("can be submited", function () {
		browser.url('/index.php?route=account/return/add');
		expect(browser).toHaveUrlContaining('/index.php?route=account/return/add')
		const app = new App()
		app.productReturnsPage.fillingProductReturnsFields({
			firstName: Faker.name.firstName(),
			lastName: Faker.name.lastName(),
			email: Faker.internet.email(),
			telephone: Faker.phone.phoneNumber(),
			orderID: Faker.random.number(),
			product: Faker.random.number(),
			productCode: Faker.random.number(),
			reasonForReturn: "3",
			productIsOpened: "1",
			comment: Faker.random.number()
		})
		app.productReturnsPage.submit()
	});
});

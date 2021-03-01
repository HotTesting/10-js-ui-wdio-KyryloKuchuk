
describe("Product return", function () {
  it("submit empty form", function () {
    browser.url('/index.php?route=account/return/add')
    browser.pause(1000);
    const accountReturnForm = $('#account-return');
    accountReturnForm.$('.buttons [type=submit]').click();
    const firstName = accountReturnForm.$('#input-firstname');
    expect(firstName).toBeDisplayed();
    const firstNameValidationError = accountReturnForm.$('#input-firstname ~ .text-danger');
    expect(firstNameValidationError).toHaveTextContaining('First Name must be between 1 and 32 characters!');

    const lastName = accountReturnForm.$('#input-lastname');
    expect(lastName).toBeDisplayed();
    const lastNameValidationError = accountReturnForm.$('#input-lastname ~ .text-danger');
    expect(lastNameValidationError).toHaveTextContaining('Last Name must be between 1 and 32 characters!');

    const email = accountReturnForm.$('#input-email');
    expect(email).toBeDisplayed();
    const emailValidationError = accountReturnForm.$('#input-email ~ .text-danger');
    expect(emailValidationError).toHaveTextContaining('E-Mail Address does not appear to be valid!');

    const telephone = accountReturnForm.$('#input-telephone');
    expect(telephone).toBeDisplayed();
    const telephoneValidationError = accountReturnForm.$('#input-telephone ~ .text-danger');
    expect(telephoneValidationError).toHaveTextContaining('Telephone must be between 3 and 32 characters!');

    const orderID = accountReturnForm.$('#input-order-id');
    expect(orderID).toBeDisplayed();
    const orderIDValidationError = accountReturnForm.$('#input-order-id ~ .text-danger');
    expect(orderIDValidationError).toHaveTextContaining('Order ID required!');

    const product = accountReturnForm.$('#input-product');
    expect(product).toBeDisplayed();
    const productValidationError = accountReturnForm.$('#input-product ~ .text-danger');
    expect(productValidationError).toHaveTextContaining('Product Name must be greater than 3 and less than 255 characters!');

    const productCode = accountReturnForm.$('#input-model');
    expect(productCode).toBeDisplayed();
    const productCodeValidationError = accountReturnForm.$('#input-model ~ .text-danger');
    expect(productCodeValidationError).toHaveTextContaining('Product Model must be greater than 3 and less than 64 characters!');

    const reasonForReturn = accountReturnForm.$('.radio');
    expect(reasonForReturn).toBeDisplayed();
    const reasonForReturnValidationError = accountReturnForm.$('.radio ~ .text-danger');
    expect(reasonForReturnValidationError).toHaveTextContaining('You must select a return product reason!');

    const productIsOpened = accountReturnForm.$('.radio-inline [checked = checked]');
    expect(productIsOpened).toBeDisplayed();
    const productIsOpenedDefaultValue = accountReturnForm.$('.radio-inline [value = "0"]')
    productIsOpenedDefaultValue.isSelected();
  });

  it.skip("can be submited", function () {
    function randomValue(countCharacters, sepecificString = "", onlyNumbers = false) {
      var text = "";
      var possible = "";
      if (onlyNumbers) {
        possible = "0123456789";
      } else {
        possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      }
      for (var i = 0; i < countCharacters; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text + sepecificString;
    }
    browser.url('/index.php?route=account/return/add');
    browser.pause(1000);
    const accountReturnForm = $('#account-return');
    const firstName = accountReturnForm.$('#input-firstname');
    firstName.setValue(randomValue(5, Date.now().toString()));

    const lastName = accountReturnForm.$('#input-lastname');
    lastName.setValue(randomValue(5, Date.now().toString()));

    const email = accountReturnForm.$('#input-email');
    email.setValue(randomValue(5, "@test.com"));

    const telephone = accountReturnForm.$('#input-telephone');
    telephone.setValue(randomValue(5, '', true));

    const orderID = accountReturnForm.$('#input-order-id');
    orderID.setValue(randomValue(5, Date.now().toString()));

    const product = accountReturnForm.$('#input-product');
    product.setValue(randomValue(5, Date.now().toString()));

    const productCode = accountReturnForm.$('#input-model');
    productCode.setValue(randomValue(5, Date.now().toString()));

    const reasonForReturn = accountReturnForm.$('.radio > label input[value ="3"]');
    reasonForReturn.click();

    const productIsOpened = accountReturnForm.$('.radio-inline [value="1"]');
    productIsOpened.click();
    const comment = accountReturnForm.$('#input-comment');
    productCode.setValue(randomValue(23, Date.now().toString()));
    accountReturnForm.$('.buttons [type=submit]').click();
    browser.pause(1000);
    expect(browser).toHaveUrl(`${browser.config.baseUrl}/index.php?route=account/return/success`);
    const titelProductReturns = $('#content h1');
    expect(titelProductReturns).toHaveText('Product Returns');
  });


});

describe("Product return", function() {
  // TODO: How to reload page before every 'it'
  // beforeTest:{
  //   browser.url('/index.php?route=account/return/add')
  // };
    it("Sambit empty form", function() {
      const accountReturnForm = $('#account-return');
      browser.url('/index.php?route=account/return/add')
      browser.pause(2000);
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
    it("Check firstName validation", function() {
      const accountReturnForm = $('#account-return');
      browser.url('/index.php?route=account/return/add')
      browser.pause(2000);
      const firstName = accountReturnForm.$('#input-firstname');
      //Not fill field 
      firstName.setValue('');
      accountReturnForm.$('.buttons [type=submit]').click();
      const firstNameValidationError = accountReturnForm.$('#input-firstname ~ .text-danger');
      //Set more than 32 characters
      expect(firstNameValidationError).toHaveTextContaining('First Name must be between 1 and 32 characters!');
      firstName.setValue('123451234512345123451234512345123');
      accountReturnForm.$('.buttons [type=submit]').click();
      expect(firstNameValidationError).toHaveTextContaining('First Name must be between 1 and 32 characters!');
      //Clean field
      firstName.clearValue()
      //Set value in range 1-32
      firstName.setValue('Jhon');
      accountReturnForm.$('.buttons [type=submit]').click();
      //TODO: how check doesn't visible element
      //firstNameValidationError.isExisting().should.be.false();
    });

  });
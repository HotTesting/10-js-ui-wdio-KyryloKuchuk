
  describe("Contact us form", function() {
    it("must send messages to shop administration", function() {
        browser.url('/index.php?route=information/contact');
        browser.pause(1000);
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
        const infoCotactForm = $('#information-contact');

        const name = infoCotactForm.$('#input-name');
        name.setValue(randomValue(5));

        const email = infoCotactForm.$('#input-email');
        email.setValue(randomValue(5, "@test.com"));

        const enquiry = infoCotactForm.$('#input-enquiry');
        enquiry.setValue(randomValue(5, Date.now().toString()));

        const buttonSubmit = infoCotactForm.$('.buttons [value="Submit"]');
        buttonSubmit.click();
        browser.pause(1000);
        expect(browser).toHaveUrl(`${browser.config.baseUrl}/index.php?route=information/contact/success`);
    });
  });
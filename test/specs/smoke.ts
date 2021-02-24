
describe('Load site page', function () {

    it('Should be alive', function () {
        browser.url('/');
        expect($('.logo')).toBeDisplayed();
        browser.pause(10000);
    })
    it('Click on tab About', function () {
        browser.url('/');
        $('#nav_bkg #nav [title~=About]').click();
        expect(browser).toHaveUrl(`${browser.config.baseUrl}/about`);
    })
})

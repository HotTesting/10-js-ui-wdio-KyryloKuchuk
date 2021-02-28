
describe('Load site page', function () {

    it.skip('Should be alive', function () {
        browser.url('/');
        browser.pause(10000);
        expect($('.logo')).toBeDisplayed();
        
    })
    it.skip('Click on tab About', function () {
        browser.url('/');
        $('#nav_bkg #nav [title~=About]').click();
        expect(browser).toHaveUrl(`${browser.config.baseUrl}/about`);
    })
})

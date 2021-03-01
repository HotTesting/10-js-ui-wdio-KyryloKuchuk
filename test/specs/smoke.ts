
describe('Load site page', function () {

    it('Should be alive', function () {
        browser.url('/');
        browser.pause(1000);
        expect($('#logo')).toBeDisplayed();
        
    })
})

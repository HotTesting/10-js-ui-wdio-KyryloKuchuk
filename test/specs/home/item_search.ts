
describe("Items search", function () {
  it("should show results in case multiple items matches", function () {
    browser.url('/');
    browser.pause(2000);
    const searchField = $('.input-group [name= "search"]');
    searchField.setValue('iPod');

    const buttonSearch = $('.input-group-btn .fa-search');
    buttonSearch.click();
    browser.pause(1000);
    expect(browser).toHaveUrl(`${browser.config.baseUrl}/index.php?route=product/search&search=iPod`);
    expect($('#content h1')).toHaveText('Search - iPod');
    const lengthOfSearchResult = $$('#content .row .product-layout h4 a[href$="iPod"]').length;
    expect(lengthOfSearchResult > 1).toBeTruthy();
  });

  it("should redirect to 'no matching results' in case no items matched", function () {
    browser.url('/');
    browser.pause(2000);
    const searchField = $('.input-group [name= "search"]');
    searchField.setValue('roiuroiroiroiroirorioirorioiro3334343434343434');
    const buttonSearch = $('.input-group-btn .fa-search');
    buttonSearch.click();
    browser.pause(1000);
    expect(browser).toHaveUrl(`${browser.config.baseUrl}/index.php?route=product/search&search=roiuroiroiroiroirorioirorioiro3334343434343434`);
    expect($('#content h1')).toHaveText('Search - roiuroiroiroiroirorioirorioiro3334343434343434');
    const noSearchResult = $('#content').$('p=There is no product that matches the search criteria.');
    noSearchResult.isDisplayed();
  });
});

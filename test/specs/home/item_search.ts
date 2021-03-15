import { App } from '../../application/application'

describe("Items search", function () {
  it("should show results in case multiple items matches", function () {
    const app = new App()
    const searchValue = 'iPod';
    app.home.searchComponent.fillingSearch(searchValue)
    app.home.searchComponent.search(searchValue)
    expect($('#content h1')).toHaveText('Search - iPod');
    const lengthOfSearchResult = $$('#content .row .product-layout h4 a[href$="iPod"]').length;
    expect(lengthOfSearchResult > 1).toBeTruthy();
  });

  it("should redirect to 'no matching results' in case no items matched", function () {
    const app = new App()
    const searchValue = 'roiuroiroiroiroirorioirorioiro3334343434343434';
    app.home.searchComponent.fillingSearch(searchValue)
    app.home.searchComponent.search(searchValue)
    expect($('#content h1')).toHaveText('Search - roiuroiroiroiroirorioirorioiro3334343434343434');
    const noSearchResult = $('#content').$('p=There is no product that matches the search criteria.');
    noSearchResult.isDisplayed();
  });
});

import { ConfirmationPage } from "./pages/checkout/confirmation.page";
import { CheckoutPage } from "./pages/checkout/index";
import { ContactUsPage } from "./pages/contact_us/contact_us.page";
import { GiftSertificatePage } from "./pages/gifts_sertificate/gifts_sertificate.page";
import { HomePage } from "./pages/home/home.page";
import { ItemPage } from "./pages/item/item_page";
import { LoginPage } from "./pages/login/login.page";
import { ProductCategoryPage } from "./pages/product_category/product_category.page";
import { ProductReturnsPage } from "./pages/product_returns/product_returns.page";

export class App {
    home: HomePage
    login: LoginPage
    productCategory: ProductCategoryPage
    contactUs: ContactUsPage
    giftSertificatePage: GiftSertificatePage
    productReturnsPage: ProductReturnsPage
    checkout: CheckoutPage
    confirmation: ConfirmationPage
    itemPage:ItemPage
    constructor() {
        this.home = new HomePage()
        this.login = new LoginPage()
        this.productCategory = new ProductCategoryPage()
        this.contactUs = new ContactUsPage()
        this.giftSertificatePage = new GiftSertificatePage()
        this.productReturnsPage = new ProductReturnsPage()
        this.checkout = new CheckoutPage()
        this.confirmation = new ConfirmationPage()
        this.itemPage = new ItemPage()
    }
}
import { ContactUsPage } from "./pages/contact_us/contact_us.page";
import { HomePage } from "./pages/home/home.page";
import { LoginPage } from "./pages/login/login.page";
import { ProductCategoryPage } from "./pages/product_category/product_category.page";

export class App {
    home: HomePage
    login: LoginPage
    productCategory: ProductCategoryPage
    contactUs: ContactUsPage
    constructor() {
        this.home = new HomePage()
        this.login = new LoginPage()
        this.productCategory = new ProductCategoryPage()
        this.contactUs = new ContactUsPage()
    }
}
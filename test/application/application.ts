import { HomePage } from "./pages/home/home.page";
import { LoginPage } from "./pages/login/login.page";
import { ProductCardComponent } from "./pages/product_category/components/product_card.component";
import { ProductCategoryPage } from "./pages/product_category/product_category.page";

export class App {
    home: HomePage
    login: LoginPage
    productCategory: ProductCategoryPage
    constructor() {
        this.home = new HomePage()
        this.login = new LoginPage()
        this.productCategory = new ProductCategoryPage()
    }
}
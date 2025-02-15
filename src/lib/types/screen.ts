import { Member } from "./member";
import { Product } from "./product";


/**REACT APP STATE **/
export interface AppRootState {
    homePage: HomePageState;
    productsPage: ProductsPageState;
}

/** HOMEPAGE **/
export interface HomePageState{
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];
}

/**PRODUCT PAGE **/
export interface ProductsPageState{
    restaurant: string | null;
    chosenProduct: Product | null;
    products: Product[];
};
/** ORDERS PAGE **/
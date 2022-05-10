interface FreeShipping { free_shipping: boolean }
interface Eshop { nick_name: string }
interface Seller { eshop: Eshop }
export interface ItemResponse {
    id: string;
    title: string;
    price: number;
    sold_quantity: number;
    condition: string;
    category_id: string;
    currency_id: string;
    thumbnail: string;
    shipping: FreeShipping;
    seller: Seller
}

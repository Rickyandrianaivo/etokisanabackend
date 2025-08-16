import { Product } from "./product.model";
export interface ICartItem {
    CartItemProduct: Product;
    CartItemQuantity: number;
    CartItemPrice: number;
    CartItemMontant: number;
}

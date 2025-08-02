import { Product } from "./product.model";

// import { model, Schema } from "mongoose";
export interface ICartItem{
    CartItemProduct : Product,
    CartItemQuantity: number,
    CartItemPrice   : number,
    CartItemMontant : number,
}
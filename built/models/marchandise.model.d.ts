import { Product } from "./product.model";
export interface IMarchandise {
    productId: Product;
    stock: number;
    prix: number;
    montant: number;
    departId: string;
    destinationId: string;
}

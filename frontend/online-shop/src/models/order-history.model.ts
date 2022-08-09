import { ProductHistory } from "./product-history";

export interface OrderHistory{
    id: number, 
    customer: string;
    products: ProductHistory[]
}
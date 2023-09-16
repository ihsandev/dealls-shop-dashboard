import { IProductResponse } from "./products";

export interface ICartResponse {
  "id": number;
  "products": IProductResponse[];
  "total": number;
  "discountedTotal": number;
  "userId": number;
  "totalProducts": number;
  "totalQuantity": number;
}
import { categoryModel } from "./category.entity";

export interface productModel{
  id:number;
  title:string;
  price:number;
  description:string;
  images:string[];
  category:categoryModel;
}
export interface CreateProductModel
  extends Omit<productModel, 'id' | 'category'> {
  categoryId: number;
}
export interface updateProductModel extends Partial<productModel> {
  categoryId?: number;
}

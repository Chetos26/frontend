import { categoryModel } from "./category.entity";

export interface productModel{
  id:number;
  title:string;
  price:number;
  description:string;
  images:string[];
  category:categoryModel;
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CreateProductModel, productModel, updateProductModel } from '../models/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly API_REST = 'https://api.escuelajs.co/api/v1/products/';
  //inyeccion de dependencias//
  constructor(private httpClient:HttpClient) {}

  getProducts():Observable<productModel[]>{
    const response =
    this.httpClient.get<productModel[]>(this.API_REST);
    return response
  }

  getProduct(id:number):Observable<productModel>{
    const url =`${this.API_REST}/${id}`
    const response=this.httpClient.get<productModel>(url);
    return response
  }
  //funcion para consumir servicio
  create (product:CreateProductModel):Observable<CreateProductModel>{
    const url =`${this.API_REST}`
    const response =
    this.httpClient.post<CreateProductModel>(url, product);
    return response;
  }

  update(id:number, product:updateProductModel):Observable<updateProductModel>{
    const url =`${this.API_REST}/${id}`
    const response =
    this.httpClient.put<updateProductModel>(url, product);
    return response;
  }

  destroy(id:number):Observable<boolean>{
    const url =`${this.API_REST}/${id}`
    const response = this.httpClient.delete<any>(url).pipe(map((response:{rta: boolean})=>{
      return response.rta
    }));
    return response;
  }

}

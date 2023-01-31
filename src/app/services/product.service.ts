import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //inyeccion de dependencias//
  constructor(private httpClient:HttpClient) {}
  getProduct(){
    this.httpClient.get('https://api.escuelajs.co/api/v1/products')
  }
}

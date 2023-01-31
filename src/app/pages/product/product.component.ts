import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implementsoninit{
  constructor (private HttpClient:HttpClient) {
  }
}
ngOnInit(): void{
  this.getProducts();
}
getProducts(){
  this.HttpClient.get('https://api.escuela.co/api/v1/products')
  console.console.log(Response);
  
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

function getProducts() {
  throw new Error('Function not implemented.');
}
  
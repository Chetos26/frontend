import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implementsoninit{
  constructor (private HcttpClient:HttpClient) {
  }
  ngOnInit(): void{
    this.getProducts();
  }
  getProducts(){
    this.HttpClient.get('https://api.escuela.co/api/v1/products').subscribe(response=>{console.log(response)})  
  }
  
  function ngOnInit() {
    throw new Error('Function not implemented.');
  }
  
  function getProduct() {
    throw new Error('Function not implemented.');
  }
    
}

import { Component, OnInit } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { CreateProductModel, updateProductModel } from 'src/app/models/product.entity';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  constructor (private productService: ProductService) {
  }

  ngOnInit(): void{
    this.deleteProduct(266)
  }
  getProducts(){
    const response=this.productService.getProducts().subscribe
    (response=>{console.log(response)})
  }

  getProduct(id:number){
    const response=this.productService.getProduct(id).subscribe
    (response=>{console.log(response)})
  }
  //funcion para consumir servicio
  createProduct (product: CreateProductModel){
    const response = this.productService.create(product).subscribe(
      response => {
        console.log(response)
      }
    )
  }

  updateProduct(id:number, product:updateProductModel){
    const response = this.productService.update(id, product).subscribe(
      response => {
        console.log(response);
      }
    )
  }

  deleteProduct(id:number){{
    const response = this.productService.destroy(id).subscribe(
      response => {
        console.log(response);
      }
    )
  }}
}


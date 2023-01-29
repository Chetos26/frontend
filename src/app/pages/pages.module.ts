import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
    ProductComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    ProductComponent,
    CategoryComponent
  ],
})
export class PagesModule { }

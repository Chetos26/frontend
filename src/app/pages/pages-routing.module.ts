import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PagesComponent } from './pages.component';

export const routes: Routes = [
  //rutas protegidas
  {path: '', component: PagesComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'product', component: ProductComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]

})
export class PagesRoutingModule { }

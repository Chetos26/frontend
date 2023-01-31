import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  //rutas protegidas
  {path: '', component: DashboardComponent},
  {path: 'product', component: ProductComponent},
  {path: 'category', component: CategoryComponent},
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

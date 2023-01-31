import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

const routes:Routes = [
  {path: '', component:NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class NotFoundRoutingModule { }

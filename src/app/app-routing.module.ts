import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  //rutas protegidas
  {path: 'dashboard', loadChildren: ()=>import('./pages/pages-routing.module').then(m=>m.PagesRoutingModule)},
  {path: 'auth', loadChildren: ()=>import('./auth/auth.module').then(a=>a.AuthModule)},
  {path: 'shared', loadChildren: ()=>import('./shared/shared.module').then(b=>b.SharedModule)},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

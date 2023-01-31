import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';
import { SharedComponent } from './shared/shared.component';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { share } from 'rxjs';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundRoutingModule } from './not-found/not-found-routing.module';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AuthComponent,
    SharedComponent,
    NotFoundComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    SharedModule,
    NotFoundRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

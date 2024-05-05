import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './layouts/home/home.component';
import { ShowProductComponent } from './pages/show-product/show-product.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { OrderProductComponent } from './pages/order-product/order-product.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AboutUsComponent } from './layouts/about-us/about-us.component';
import { NgToastModule } from 'ng-angular-popup';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopSellingProductComponent } from './pages/top-selling-product/top-selling-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryNavbarComponent,
    FooterComponent,
    HomeComponent,
    AddProductComponent,
    OrderProductComponent,
    ShowProductComponent,
    FilterPipe,
    AboutUsComponent,
    TopSellingProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgToastModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration()
  ],
  exports: [
    ShowProductComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

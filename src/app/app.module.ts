import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainpageComponent } from './mainpage/mainpage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
import { CartWidgetComponent } from './cart-widget/cart-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ProductDetailsComponent,
    HeaderComponent,
    CartComponent,
    CheckoutComponent,
    SuccessComponent,
    CartWidgetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { BannerComponent } from './banner.component';
import { FooterComponent } from './footer.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { BuyerModule } from './buyer/buyer.module';
import { VendorModule } from './vendor/vendor.module';


@NgModule({
  declarations: [
    AppComponent,HeaderComponent,BannerComponent,FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,BuyerModule,VendorModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

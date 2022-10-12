import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorinterceptService } from 'src/interceptors/errorintercept.service';
import { TokeninterceptorService } from 'src/interceptors/tokeninterceptor.service';
import { SigninComponent } from 'src/signin/signin.component';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorinterceptService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokeninterceptorService,
      multi: true
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

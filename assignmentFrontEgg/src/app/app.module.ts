import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FronteggAppModule, FronteggComponent } from '@frontegg/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,

    FronteggAppModule.forRoot(
      {
        contextOptions: {
          baseUrl: 'https://app-yrccz001p11t.frontegg.com',
          clientId: '3dab194b-15ca-4fe4-9839-713664f8108c'
        },
        hostedLoginBox: true,
      }
    ),
  ],

  entryComponents: [FronteggComponent],

  bootstrap: [AppComponent],
})
export class AppModule { }
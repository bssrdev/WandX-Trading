import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//HTTP Modeuls
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { RequestCache, RequestCacheWithMap } from './request-cache.service';
import { AuthService } from './auth.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';

import {SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "angular5-social-login";



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreatetokenComponent } from './createtoken/createtoken.component';
import { TokentradeComponent } from './tokentrade/tokentrade.component';
import { SinginComponent } from './singin/singin.component';
import { CrowdsaleComponent } from './crowdsale/crowdsale.component';




// Configs for Authentication
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("1775779782446155")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("410568416807-colp37oheo1k5ftbcgonrlp6jgdqo0dg.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}




@NgModule({
  declarations: [
    AppComponent,
    CreatetokenComponent,
    TokentradeComponent,
    SinginComponent,
    CrowdsaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocialLoginModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
  ],
  providers: [
    AuthService,
    HttpErrorHandler,
    MessageService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

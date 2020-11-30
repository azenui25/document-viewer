import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustomMaterialModule } from './shared/material.module';
import {AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {DocumentsModule} from './documents/documents.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { DialogTermsConditionsComponent } from './auth/dialog-terms-conditions/dialog-terms-conditions.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginActionComponent } from './auth/login-action/login-action.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DialogTermsConditionsComponent,
    LoginComponent,
    LoginActionComponent,
    SignupComponent,
    ResetPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AuthModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    DocumentsModule,
    FormsModule,
    ReactiveFormsModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({uri: "http://localhost:3000/graphql"}),
      cache: new InMemoryCache()
    });
  }
}

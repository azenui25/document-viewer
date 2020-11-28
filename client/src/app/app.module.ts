import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {LayoutModule} from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {CustomMaterialModule } from './shared/material.module';
// import {AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
// import {DocumentsModule} from './documents/documents.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // LayoutModule,
    // AuthModule,
    BrowserAnimationsModule,
    // CustomMaterialModule,
    HttpClientModule,
    // DocumentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

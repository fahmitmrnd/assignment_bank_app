import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutModule } from './layouts/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageModule } from './pages/page.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    PageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

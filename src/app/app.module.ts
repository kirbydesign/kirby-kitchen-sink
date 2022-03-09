import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KirbyModule } from "@kirbydesign/designsystem";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, KirbyModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

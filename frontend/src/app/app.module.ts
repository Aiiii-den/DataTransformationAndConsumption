import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HintergrundbildComponent } from './components/hintergrundbild/hintergrundbild.component';

@NgModule({
  declarations: [
    HintergrundbildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HintergrundComponent } from './components/hintergrund/hintergrund.component';
import { TabellenseiteComponent } from './components/tabellenseite/tabellenseite.component';
import { StartseiteComponent } from './components/startseite/startseite.component';

@NgModule({
  declarations: [
    AppComponent,
    HintergrundComponent,
    TabellenseiteComponent,
    StartseiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

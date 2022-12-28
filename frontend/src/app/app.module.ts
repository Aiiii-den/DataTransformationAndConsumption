import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TabellenseiteComponent} from './components/tabellenseite/tabellenseite.component';
import {StartseiteComponent} from './components/startseite/startseite.component';

@NgModule({
  declarations: [
    AppComponent,
    StartseiteComponent,
    TabellenseiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

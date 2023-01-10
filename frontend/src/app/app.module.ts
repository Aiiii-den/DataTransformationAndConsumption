import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TabellenseiteComponent} from './components/tabellenseite/tabellenseite.component';
import {StartseiteComponent} from './components/startseite/startseite.component';
import { DigimonausgabeComponent } from './components/digimonausgabe/digimonausgabe.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    StartseiteComponent,
    TabellenseiteComponent,
    DigimonausgabeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

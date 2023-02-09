import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TabellenseiteComponent} from './components/tabellenseite/tabellenseite.component';
import {StartseiteComponent} from './components/startseite/startseite.component';
import {DigimonausgabeComponent} from './components/digimonausgabe/digimonausgabe.component';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';


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
    ApolloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ){
    apollo.create({
      link: httpLink.create({uri: 'http://localhost:4000'}),
      cache: new InMemoryCache()
    })
  }
}

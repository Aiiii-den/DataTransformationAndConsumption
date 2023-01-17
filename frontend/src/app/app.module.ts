import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TabellenseiteComponent} from './components/tabellenseite/tabellenseite.component';
import {StartseiteComponent} from './components/startseite/startseite.component';
import {DigimonausgabeComponent} from './components/digimonausgabe/digimonausgabe.component';

import { GraphQLModule } from './graphql.module';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
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
    GraphQLModule,
    HttpClientModule,
    ApolloModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:4000'
          })
        }
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

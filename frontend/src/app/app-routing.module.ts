import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabellenseiteComponent} from "./components/tabellenseite/tabellenseite.component";
import {StartseiteComponent} from "./components/startseite/startseite.component";
import {DigimonausgabeComponent} from "./components/digimonausgabe/digimonausgabe.component";

const routes: Routes = [
  {
    // Standardroute: Umleitung auf '/startseite'
    path: '',
    redirectTo: 'startseite',
    pathMatch: 'full'
  },
  //Routen unserer Seiten
  {path: 'startseite', component: StartseiteComponent},
  {path: 'tabellenseite', component: TabellenseiteComponent},
  {path: 'digimonausgabe', component: DigimonausgabeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

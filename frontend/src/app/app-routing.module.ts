import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TabellenseiteComponent} from "./components/tabellenseite/tabellenseite.component";

const routes: Routes = [
  { path: 'tabellenseite', component: TabellenseiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

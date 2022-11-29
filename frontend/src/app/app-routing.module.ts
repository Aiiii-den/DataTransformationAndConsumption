import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HintergrundComponent} from "./components/hintergrund/hintergrund.component";

const routes: Routes = [
  { path: 'hintergrundbild', component: HintergrundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

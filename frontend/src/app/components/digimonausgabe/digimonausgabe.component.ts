import {Component, OnInit} from '@angular/core';
import {Apollo} from "apollo-angular";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';

import gql from 'graphql-tag';

import {Digimon,Query} from "../../types";

@Component({
  selector: 'app-digimonausgabe',
  templateUrl: './digimonausgabe.component.html',
  styleUrls: ['./digimonausgabe.component.css']
})
export class DigimonausgabeComponent implements OnInit {

digimon: Observable<Digimon[]>;
  constructor(private apollo:Apollo) { }

  ngOnInit() {
this.digimon = this.apollo.watchQuery<Query>({
  query: gql`
 query AllDigimon {
  allDigimon {
    img
    level
    name
  }
}`
})
  .valueChanges
  .pipe(
    map(result => result.data.allDigimon)
  );
  }
}

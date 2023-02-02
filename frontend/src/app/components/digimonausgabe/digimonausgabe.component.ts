import {Component, OnInit} from '@angular/core';
import {Apollo} from "apollo-angular";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';

import gql from 'graphql-tag';

import {DigimonByName1,Query} from "../../types";

@Component({
  selector: 'app-digimonausgabe',
  templateUrl: './digimonausgabe.component.html',
  styleUrls: ['./digimonausgabe.component.css']
})
export class DigimonausgabeComponent implements OnInit {

  digimonname3: Observable<DigimonByName1[]>;

  constructor(private apollo: Apollo) {
  }

  ngOnInit(): void {

    this.digimonname3 = this.apollo.watchQuery<Query>({
      query: gql`
 query DigimonByName($name: String) {
  digimonByName(name: $name) {
    name
    img
    level
    cards {
      cardnumber
      name
      color
      level
      digi_type
      attribute
      image_url
      play_cost
      evolution_cost
    }
  }
}`
    })
      .valueChanges
      .pipe(
        map(result => result.data.digimonByName2)
      );
  }
}


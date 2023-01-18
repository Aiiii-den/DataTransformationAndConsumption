import {Component, OnInit} from '@angular/core';
import {Apollo} from "apollo-angular";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';

import gql from 'graphql-tag';

import {Cards,Query} from "../../types";

@Component({
  selector: 'app-digimonausgabe',
  templateUrl: './digimonausgabe.component.html',
  styleUrls: ['./digimonausgabe.component.css']
})
export class DigimonausgabeComponent implements OnInit {

cards: Observable<Cards[]>;
  constructor(private apollo:Apollo) { }

  ngOnInit() {
this.cards = this.apollo.watchQuery<Query>({
  query: gql`
  query allCards {
  allCards{
  cardnumber
    name
    color
    level
    digi_type
    attribute
    image_url
    play_cost
    evolution_cost}
  }`
})
  .valueChanges
  .pipe(
    map(result => result.data.allCards)
  );
  }
}

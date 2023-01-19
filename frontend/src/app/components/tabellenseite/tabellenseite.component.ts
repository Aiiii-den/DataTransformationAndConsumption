import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Digimon, Query} from "../../types";
import {Apollo} from "apollo-angular";
import gql from "graphql-tag";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-tabellenseite',
  templateUrl: './tabellenseite.component.html',
  styleUrls: ['./tabellenseite.component.css']
})
export class TabellenseiteComponent {

  digimon: Observable<Digimon[]>;
  constructor(private apollo:Apollo) { }

  ngOnInit() {
    this.digimon = this.apollo.watchQuery<Query>({
      query: gql`
 query AllDigimon {
  allDigimon {
    img
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

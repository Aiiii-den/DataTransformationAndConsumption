import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {DigimonByName, Query} from "../../types";
import {Apollo} from "apollo-angular";
import gql from "graphql-tag";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.css']
})
export class StartseiteComponent {

  digimon: Observable<DigimonByName[]>;

  constructor(private apollo: Apollo) {
  }


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

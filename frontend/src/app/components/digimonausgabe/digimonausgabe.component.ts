import {Component, OnInit} from '@angular/core';
import {Apollo} from "apollo-angular";
import {Observable} from "rxjs";

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
    var name = 'Koromon';
    var query = `query TestConjureName($name: String) {
      testConjureName(name: $name) {
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


    fetch('http://localhost:4000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {name},
      })
    })
      .then(r => r.json())
      .then(data => console.log('data returned:', data));
  }
}


import {Component, OnInit} from '@angular/core';
import {Apollo} from "apollo-angular";

@Component({
  selector: 'app-digimonausgabe',
  templateUrl: './digimonausgabe.component.html',
  styleUrls: ['./digimonausgabe.component.css']
})
export class DigimonausgabeComponent implements OnInit {

  constructor(private apollo: Apollo) {
  }
  ngOnInit(): void {
    //hier wird der name des Digimons durch die Suchleisteneingabe deklariert
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const value_for_name = urlParams.get('name')
    console.log(value_for_name);
    var name = value_for_name;
    var query = `query CompleteDigimonByName($name: String) {
      completeDigimonByName(name: $name) {
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
      //Ausgabe data
      .then(data => document.body.append(JSON.stringify(data)))

    document.body.style.textAlign = 'center';
    document.body.style.fontFamily = 'Chalkduster';
    document.body.style.padding = '250px 20px 10px 10px ';
  }
}

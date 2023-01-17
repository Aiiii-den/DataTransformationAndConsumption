import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';
//import allCards from '../../../../../server/graphql/resolvers/REST/Queries.js';


const GET_POSTS = gql`
query AllCards {
  allCards {
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
`;
@Component({
  selector: 'app-digimonausgabe',
  templateUrl: './digimonausgabe.component.html',
  styleUrls: ['./digimonausgabe.component.css']
})
export class DigimonausgabeComponent implements OnInit, OnDestroy {

  loading: boolean;
  posts: any;

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: GET_POSTS
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.posts = data.posts;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();

  }

}

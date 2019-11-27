import { Component, OnInit } from '@angular/core';
import { LeaguesService } from '../../services/leagues.service';

@Component({
  selector: 'app-fantasy-home',
  templateUrl: './fantasy-home.component.html',
  styleUrls: ['./fantasy-home.component.css']
})
export class FantasyHomeComponent implements OnInit {
  myLeagues = []
  constructor( private leagues: LeaguesService ) {
    this.getMyLeagues();
  }
  async getMyLeagues() {
    this.myLeagues = await this.leagues.myLeagues();
  }
  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  constructor(private http: HttpClient, private users: UsersService) { }

  public async myLeagues() {
    try {
      var user = this.users.getUser();
      if (user !== undefined) {
        console.log(user)
        const response: any = await this.http
          .get('http://localhost:8080/api/leagues/user/' + user)
          .toPromise();
        var leagues = response.leagues;
        leagues.forEach(league => {
          league.subscription = response.subscriptions
            .find(subscription => league._id === subscription.league);
        })
        // console.log(leagues);
        return leagues;
      }
    } catch (e) {
      await console.log(e);
      return {};
    }
  }
}

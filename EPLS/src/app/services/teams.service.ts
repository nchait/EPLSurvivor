import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  teams=[];
  constructor(private http: HttpClient) {
    this.getTeams();
  }

  async getTeams() {
    try {
      const response: any = await this.http
        .get('http://localhost:8080/api/teams/epl')
        .toPromise();
      console.log(response.teams);
      this.teams=response.teams
    } catch (e) {
      await console.log(e);
      return {};
    }
  }
}

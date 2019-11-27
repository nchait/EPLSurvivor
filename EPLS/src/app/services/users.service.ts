import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userId;
  constructor(private http: HttpClient) {
    this.userId = localStorage.getItem('userId');
  }

  public async getUsers() {
    try {
      const response: any = await this.http
        .get('http://localhost:8080/api/users')
        .toPromise();
      return response;
    } catch (e) {
      await console.log(e);
      return {};
    }
  }
  public setUser(userId) {
    localStorage.setItem('userId', userId);
    this.userId = userId;
  }
  public getUser() {
    return this.userId;
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  getUsers(): Observable<Object> {

    this.http.get<any>("http://localhost:8080/api/users").toPromise().then(
      res => { // Success
        return res
      }
    );
  }


  public getUsers2(){
    this.http.get("http://localhost:8080/api/users").toPromise().then(
        res => { // Success
          return res
        }
      );
    return []//this.http.get();
  }

}

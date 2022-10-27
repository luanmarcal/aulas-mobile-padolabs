import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  userLogin(data: any): Observable<object> {
    console.log(data);
    const url = 'http://172.16.107.82:8080/login';
    return this.http.post(url, data);
  }

  userRegister(data: any): Observable<object> {
    const url = 'http://172.16.107.82:8080/';
    return this.http.post(url, data);
  }

}

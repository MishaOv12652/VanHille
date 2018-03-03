import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class AuthService {
  authToken: any;
  SiteUser: any;


  constructor(private http: Http) {
  }


  registerSiteUser(SiteUser) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.post('http://localhost:3050/User/register', SiteUser, {headers: headers})
    //   .map(res => res.json());
    return this.http.post('User/register', SiteUser, {headers: headers})
      .map(res => res.json());
  }

  authUser(SiteUser) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    // return this.http.post('http://localhost:3050/User/auth', SiteUser, {headers: headers})
    //   .map(res => res.json());
    return this.http.post('User/auth', SiteUser, {headers: headers})
      .map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    // return this.http.get('http://localhost:3050/User/profile', {headers: headers})
    //   .map(res => res.json());
    return this.http.get('User/profile', {headers: headers})
      .map(res => res.json());
  }


  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('admin', JSON.stringify(user));
    this.authToken = token;
    this.SiteUser = user;
  }

  loadToken() {
    const token = localStorage.getItem('token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    this.authToken = null;
    this.SiteUser = null;
    localStorage.clear();
  }
}

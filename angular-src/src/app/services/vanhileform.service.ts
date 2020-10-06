import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

@Injectable()
export class VanhileformService {
  user: any;

  constructor(private http: Http) {
  }


  validateForm(user) {
    if (user.courseNum == undefined || user.groupNum == undefined || user.ID == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateID(ID: Number) {
    if (ID.toString().length >= 8 && ID.toString().length <= 9)
      return true;
    else
      return false;
  }

  getUser(ID: Number) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.get('http://localhost:3050/VHS/' + ID, {headers: headers}).map(res => res.json());
    // return this.http.get('VHS/' + ID, {headers: headers}).map(res => res.json());
    console.log(environment.url);
    return this.http.get(`${environment.url}VHS/${ID}`, {headers: headers}).map(res => res.json());
  }

  createUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.post('http://localhost:3050/VHS/register', user, {headers: headers})
    //   .map(res => res.json());
    // return this.http.post('VHS/register', user, {headers: headers})
    //   .map(res => res.json());
    return this.http.post(`${environment.url}VHS/register`, user, {headers: headers})
      .map(res => res.json());
  }

  nullifyAnswers(id: Number, tryNum: Number) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.post('http://localhost:3050/VHS/nullifyAnswers/' + id + '/' + tryNum, {headers: headers})
    //   .map(res => res.json());
    // return this.http.post('/VHS/nullifyAnswers/' + id + '/' + tryNum, {headers: headers})
    //   .map(res => res.json());
    return this.http.post(`${environment.url}VHS/nullifyAnswers/${id}/${tryNum}`, {headers: headers})
      .map(res => res.json());
  }

  updateGroupNumOfStudent(id: Number, groupNum: Number) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.post('http://localhost:3050/VHS/updateGroupNum/' + id + '/' + groupNum, {headers: headers})
    //   .map(res => res.json());
    // return this.http.post('/VHS/updateGroupNum/' + id + '/' + groupNum, {headers: headers})
    //   .map(res => res.json());
    return this.http.post(`${environment.url}VHS/updateGroupNum/${id}/${groupNum}`, {headers: headers})
      .map(res => res.json());
  }
}

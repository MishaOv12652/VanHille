import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';
@Injectable()
export class VanhilereportService {

  constructor(private http: Http) {
  }

  getUsersLast3Hours() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.get('http://localhost:3050/VHS/', {headers: headers})
    //   .map(res => res.json());
    // return this.http.get('VHS/', {headers: headers})
    //   .map(res => res.json());
    return this.http.get(`${environment.url}VHS/`,{headers: headers})
      .map(res => res.json());
  }

  getUser(ID: Number) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.get(`http://localhost:3050/VHS/${ID}`, {headers: headers}).map(res => res.json());
    // return this.http.get(`VHS/${ID}`, {headers: headers}).map(res => res.json());
    return this.http.get(`${environment.url}VHS/${ID}`, {headers: headers}).map(res => res.json());
  }

  getAllQuestions() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.get('http://localhost:3050/VanHilleQuiz/questions', {headers: headers}).map(res => res.json());
    // return this.http.get('VanHilleQuiz/questions', {headers: headers}).map(res => res.json());
    return this.http.get(`${environment.url}VanHilleQuiz/questions`, {headers: headers}).map(res => res.json());
  }

  createAllResults(tryNum: Number, courseNum: Number, groupNum: Number) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.post(`http://localhost:3050/VanHilleQuiz/calcClass/${tryNum}/${courseNum}/${groupNum}`, {headers: headers})
    //   .map(res => res.json());
    // return this.http.post(`VanHilleQuiz/calcClass/${tryNum}/${courseNum}/${groupNum}`, {headers: headers})
    //   .map(res => res.json());
    return this.http.post(`${environment.url}VanHilleQuiz/calcClass/${tryNum}/${courseNum}/${groupNum}`, {headers: headers})
      .map(res => res.json());
  }

  // createAllResults(tryNum: Number) {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post('http://localhost:3050/VanHilleQuiz/calcAll/' + tryNum, {headers: headers})
  //     .map(res => res.json());
  //   //  return this.http.post('VanHilleQuiz/calcAll/'+tryNum,{headers:headers})
  //   //  .map(res=>res.json());
  // }

  getAllQuizesDoneInTheLastSemeter() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.get('http://localhost:3050/VanHilleQuiz/studentSemester/get', {headers: headers})
    //   .map(res => res.json());
    // return this.http.get('VanHilleQuiz/studentSemester/get', {headers: headers})
    //   .map(res => res.json());
    return this.http.get(`${environment.url}VanHilleQuiz/studentSemester/get`, {headers: headers})
      .map(res => res.json());
  }

  getQuizesByGroupAndCourse(cNum: Number, gNum: Number) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.get(`http://localhost:3050/VanHilleQuiz/studentSemester/${cNum}/${gNum}`, {headers: headers})
    //   .map(res => res.json());
    // return this.http.get(`VanHilleQuiz/studentSemester/${cNum}/${gNum}`, {headers: headers})
    //   .map(res => res.json());
    return this.http.get(`${environment.url}VanHilleQuiz/studentSemester/${cNum}/${gNum}`, {headers: headers})
      .map(res => res.json());
  }

  getQuizByCourseNum(cNum: Number) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.get(`http://localhost:3050/VanHilleQuiz/quizByCnum/${cNum}`, {headers: headers})
    //   .map(res => res.json());
    // return this.http.get(`VanHilleQuiz/quizByCnum/${cNum}`, {headers: headers})
    //   .map(res => res.json());
    return this.http.get(`${environment.url}VanHilleQuiz/quizByCnum/${cNum}`, {headers: headers})
      .map(res => res.json());
  }

  getStudentsBetweenDates(sDate: Date, fDate: Date) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.get(`http://localhost:3050/VHS/students/${sDate}/${fDate}`, {headers: headers})
    //   .map(res => res.json());
    // return this.http.get(`VHS/students/${sDate}/${fDate}`, {headers: headers})
    //   .map(res => res.json());
    return this.http.get(`${environment.url}VHS/students/${sDate}/${fDate}`, {headers: headers})
      .map(res => res.json());
  }


  getAllUniqueCourseNum() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.get(`http://localhost:3050/VHS/get/unique/courseNums`, {headers: headers})
    //   .map(res => res.json());
    // return this.http.get(`VHS/get/unique/courseNums`, {headers: headers})
    //   .map(res => res.json());
    return this.http.get(`${environment.url}VHS/get/unique/courseNums`, {headers: headers})
      .map(res => res.json());
  }

  getCorepondingGroupNums(courseNum) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.get(`http://localhost:3050/VHS/get/unique/corresponding/groupNums/${courseNum}`, {headers: headers})
    //   .map(res => res.json());
    // return this.http.get(`VHS/get/unique/corresponding/groupNums/${courseNum}`, {headers: headers})
    //   .map(res => res.json());
    return this.http.get(`${environment.url}VHS/get/unique/corresponding/groupNums/${courseNum}`, {headers: headers})
      .map(res => res.json());
  }
}

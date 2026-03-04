import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class QuestionsserviceService {

  constructor(private http: HttpClient) {}

  getUser(ID: any) {
    return this.http.get<any>('VHS/' + ID);
  }

  getAllQuestions() {
    return this.http.get<any>('VanHilleQuiz/questions');
  }

  saveCorrectAnsPerDiff(id: any, arr: any, tryNum: any) {
    return this.http.post<any>('/VHS/calc/' + tryNum + '/' + id + '/' + arr, {});
  }

  getNextQuestion(id: any) {
    return this.http.get<any>('VanHilleQuiz/' + id);
  }

  saveUserAnswer(id: any, ansNum: any, qnumber: any, tryNum: any) {
    return this.http.put<any>('VHS/' + id + '/' + ansNum + '/' + qnumber + '/' + tryNum, {});
  }

  calcUser(id: any, tryNum: any) {
    return this.http.post<any>('VanHilleQuiz/calcStudent/' + tryNum + '/' + id, {});
  }
}

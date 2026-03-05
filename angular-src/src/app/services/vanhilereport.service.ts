import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class VanhilereportService {

  constructor(private http: HttpClient) {}

  getUsersLast3Hours() {
    return this.http.get<any>('VHS/');
  }

  getUser(ID: any) {
    return this.http.get<any>(`VHS/${ID}`);
  }

  getAllQuestions() {
    return this.http.get<any>('VanHilleQuiz/questions');
  }

  createAllResults(tryNum: any, courseNum: any, groupNum: any) {
    return this.http.post<any>(`VanHilleQuiz/calcClass/${tryNum}/${courseNum}/${groupNum}`, {});
  }

  getAllQuizesDoneInTheLastSemeter() {
    return this.http.get<any>('VanHilleQuiz/studentSemester/get');
  }

  getQuizesByGroupAndCourse(cNum: any, gNum: any) {
    return this.http.get<any>(`VanHilleQuiz/studentSemester/${cNum}/${gNum}`);
  }

  getQuizByCourseNum(cNum: any) {
    return this.http.get<any>(`VanHilleQuiz/quizByCnum/${cNum}`);
  }

  getStudentsBetweenDates(sDate: any, fDate: any) {
    return this.http.get<any>(`VHS/students/${sDate}/${fDate}`);
  }

  getAllUniqueCourseNum() {
    return this.http.get<any>('VHS/get/unique/courseNums');
  }

  getCorepondingGroupNums(courseNum: any) {
    return this.http.get<any>(`VHS/get/unique/corresponding/groupNums/${courseNum}`);
  }

  getStudentsByGroup(courseNum: any, groupNum: any) {
    return this.http.get<any>(`VHS/${courseNum}/${groupNum}`);
  }
}

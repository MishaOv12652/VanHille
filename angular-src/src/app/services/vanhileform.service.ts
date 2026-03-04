import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class VanhileformService {

  constructor(private http: HttpClient) {}

  validateForm(user: any): boolean {
    if (user.courseNum == undefined || user.groupNum == undefined || user.ID == undefined) {
      return false;
    }
    return true;
  }

  validateID(ID: any): boolean {
    const len = ID.toString().length;
    return len >= 8 && len <= 9;
  }

  getUser(ID: any) {
    return this.http.get<any>('VHS/' + ID);
  }

  createUser(user: any) {
    return this.http.post<any>('VHS/register', user);
  }

  nullifyAnswers(id: any, tryNum: any) {
    return this.http.post<any>('/VHS/nullifyAnswers/' + id + '/' + tryNum, {});
  }

  updateGroupNumOfStudent(id: any, groupNum: any) {
    return this.http.post<any>('/VHS/updateGroupNum/' + id + '/' + groupNum, {});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class GroupsService {
  constructor(private http: HttpClient) {}

  getMyGroups() {
    return this.http.get<any>('Groups');
  }

  createGroup(data: { name: string; courseNum: number; groupNum: number }) {
    return this.http.post<any>('Groups', data);
  }

  deleteGroup(id: string) {
    return this.http.delete<any>('Groups/' + id);
  }

  toggleUnlock(id: string) {
    return this.http.patch<any>('Groups/' + id + '/unlock', {});
  }

  checkLockStatus(courseNum: number, groupNum: number) {
    return this.http.get<any>(`Groups/lock-status?courseNum=${courseNum}&groupNum=${groupNum}`);
  }
}

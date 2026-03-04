import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class InvitesService {
  constructor(private http: HttpClient) {}

  sendEmailInvite(data: { email: string; groupId: string; role: string }) {
    return this.http.post<any>('Invites/email', data);
  }

  validateToken(token: string) {
    return this.http.get<any>('Invites/validate/' + token);
  }

  joinByCode(joinCode: string) {
    return this.http.post<any>('Invites/join/code', { joinCode });
  }

  markUsed(token: string) {
    return this.http.post<any>('Invites/use/' + token, {});
  }
}

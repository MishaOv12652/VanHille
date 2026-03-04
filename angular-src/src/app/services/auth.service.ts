import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) {}

  registerSiteUser(SiteUser: any) {
    return this.http.post<any>('User/register', SiteUser);
  }

  authUser(SiteUser: any) {
    return this.http.post<any>('User/auth', SiteUser);
  }

  getProfile() {
    return this.http.get<any>('User/profile');
  }

  storeUserData(token: string, user: string, role: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('admin', JSON.stringify(user));
    localStorage.setItem('role', role);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  hasRole(...roles: string[]): boolean {
    const role = this.getRole();
    return !!role && roles.includes(role);
  }

  loggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;
    try {
      const decoded: any = jwtDecode(token);
      return decoded.exp > Date.now() / 1000;
    } catch {
      return false;
    }
  }

  logout() {
    localStorage.clear();
  }
}

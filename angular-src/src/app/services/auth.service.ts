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

  storeUserData(token: string, user: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('admin', JSON.stringify(user));
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private rawToken(): string | null {
    const t = this.getToken();
    if (!t) return null;
    return t.startsWith('JWT ') ? t.slice(4) : t;
  }

  getRole(): string | null {
    const token = this.rawToken();
    if (!token) return null;
    try {
      const decoded: any = jwtDecode(token);
      return decoded.user?.role ?? null;
    } catch {
      return null;
    }
  }

  hasRole(...roles: string[]): boolean {
    const role = this.getRole();
    return !!role && roles.includes(role);
  }

  loggedIn(): boolean {
    const token = this.rawToken();
    if (!token) return false;
    try {
      const decoded: any = jwtDecode(token);
      return decoded.exp > Date.now() / 1000;
    } catch {
      return false;
    }
  }

  getUsername(): string | null {
    const raw = localStorage.getItem('admin');
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return raw; }
  }

  logout() {
    localStorage.clear();
  }
}

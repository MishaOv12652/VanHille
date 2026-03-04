import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class LiteratureService {

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>('Literature');
  }

  addEntry(entry: { title: string; desc: string; url: string; category: string }) {
    return this.http.post<any>('Literature', entry);
  }

  deleteEntry(id: string) {
    return this.http.delete<any>('Literature/' + id);
  }
}

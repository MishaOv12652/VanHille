import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
@Injectable()
export class CloudlinksService {

  constructor(private http:Http) {}

  getAllCloudLinkTables(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3050/CloudLinks/getAllCloudLinks',{headers:headers}).map(res=>res.json());
  }

  addCloudLinkTable(table){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3050/CloudLinks/addCloudLinkTable',table,{headers:headers}).map(res=>res.json());
  }

  updateCloudLinkTable(id,table){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3050/CloudLinks/' + id,table,{headers:headers}).map(res=>res.json());
  }

  deleteCloudLinkTable(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.delete('http://localhost:3050/CloudLinks/' + id,{headers:headers}).map(res=>res.json());
  }

}

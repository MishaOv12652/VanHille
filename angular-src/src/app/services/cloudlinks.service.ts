import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CloudlinksService {

  constructor(private http: HttpClient) {}

  getAllCloudLinkTables() {
    return this.http.get<any>('CloudLinks/getAllCloudLinks');
  }

  addCloudLinkTable(table: any) {
    return this.http.post<any>('CloudLinks/addCloudLinkTable', table);
  }

  addEntryToCloudLinkTable(id: string, newTableData: any) {
    return this.http.post<any>('CloudLinks/' + id, newTableData);
  }

  deleteEntryFromCloudTable(id: string, deletedTableData: any) {
    return this.http.post<any>('CloudLinks/deleteEntry/' + id, deletedTableData);
  }

  deleteCloudLinkTable(id: string) {
    return this.http.delete<any>('CloudLinks/' + id);
  }
}

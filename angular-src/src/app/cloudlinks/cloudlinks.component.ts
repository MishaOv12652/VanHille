import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CloudlinksService } from '../services/cloudlinks.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cloudlinks',
  templateUrl: './cloudlinks.component.html',
  styleUrls: ['./cloudlinks.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CloudlinksComponent implements OnInit {
  tableName: string = '';
  tables_array: Array<any> = [];
  editingEntry: any = null;
  editTableId: string = '';
  newEntry: any = { id: '', name: '', desc: '', url: '' };
  addingToTableId: string = '';

  constructor(
    private cloud_links_service: CloudlinksService,
    private toastr: ToastrService,
    public auth_service: AuthService
  ) {}

  ngOnInit() {
    this.cloud_links_service.getAllCloudLinkTables().subscribe(tables => {
      if (!tables.success) {
        this.toastr.error(tables.msg);
      } else {
        this.tables_array = tables.cloudLinksTables;
      }
    });
  }

  addTable() {
    if (!this.tableName) return;
    const newTable = { tableId: this.tableName, settings_obj: {}, data: [] };
    this.tables_array.push(newTable);
    this.cloud_links_service.addCloudLinkTable(newTable).subscribe(data => {
      if (!data.success) {
        this.toastr.error(JSON.stringify(data.msg));
      } else {
        this.toastr.success('Table ' + data.cloudLinkTable.tableId + ' Was Created');
      }
    });
    this.tableName = '';
  }

  startAdd(tableId: string) {
    this.addingToTableId = tableId;
    this.newEntry = { id: '', name: '', desc: '', url: '' };
  }

  confirmAdd(table: any) {
    if (window.confirm('Are you sure you want to create?')) {
      this.cloud_links_service.addEntryToCloudLinkTable(table.tableId, this.newEntry).subscribe(data => {
        if (data.success) {
          table.data = [...(table.data || []), { ...this.newEntry }];
          this.toastr.success('new Entry was added to the table ' + table.tableId);
        } else {
          this.toastr.error('Something Went Wrong');
        }
      });
    }
    this.addingToTableId = '';
  }

  startEdit(entry: any, tableId: string) {
    this.editingEntry = { ...entry };
    this.editTableId = tableId;
  }

  confirmEdit(table: any) {
    if (window.confirm('Are you sure you want to save?')) {
      const oldEntry = table.data.find((e: any) => e.id === this.editingEntry.id);
      this.cloud_links_service.deleteEntryFromCloudTable(table.tableId, oldEntry).subscribe(data => {
        if (!data.success) {
          this.toastr.error('Something Went Wrong on update delete');
        } else {
          this.cloud_links_service.addEntryToCloudLinkTable(table.tableId, this.editingEntry).subscribe(data => {
            if (!data.success) {
              this.toastr.error('Something Went Wrong on update add');
            } else {
              const idx = table.data.findIndex((e: any) => e.id === this.editingEntry.id);
              if (idx !== -1) table.data[idx] = { ...this.editingEntry };
              this.toastr.success('An Entry was updated in the table ' + table.tableId);
            }
          });
        }
      });
    }
    this.editingEntry = null;
    this.editTableId = '';
  }

  confirmDelete(table: any, entry: any) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.cloud_links_service.deleteEntryFromCloudTable(table.tableId, entry).subscribe(data => {
        if (data.success) {
          table.data = table.data.filter((e: any) => e !== entry);
          this.toastr.success('A row was successfully deleted from the table ' + table.tableId);
        } else {
          this.toastr.error('Something Went Wrong');
        }
      });
    }
  }

  deleteTable() {
    const idx = this.tables_array.findIndex(t => t.tableId === this.tableName);
    if (idx !== -1) {
      this.tables_array.splice(idx, 1);
      this.cloud_links_service.deleteCloudLinkTable(this.tableName).subscribe(table => {
        if (!table.success) {
          this.toastr.error(table.msg);
        } else {
          this.toastr.success('Table ' + this.tableName + ' was deleted');
        }
      });
    }
    this.tableName = '';
  }
}

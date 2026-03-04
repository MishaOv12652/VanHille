import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AuthService } from '../services/auth.service';
import { CloudlinksService } from '../services/cloudlinks.service';
import { ToastrService } from 'ngx-toastr';
import { CustomEditorComponent } from './custom-editor/custom-editor.component';

@Component({
  selector: 'app-cloudlinks',
  templateUrl: './cloudlinks.component.html',
  styleUrls: ['./cloudlinks.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, Ng2SmartTableModule]
})
export class CloudlinksComponent implements OnInit {
  tableName: string = '';
  table_settings_object: any;
  tables_array: Array<any> = [];

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
        if (this.auth_service.loggedIn()) {
          this.tables_array = tables.cloudLinksTables;
          this.tables_array.forEach((cloudlinkTable) => {
            cloudlinkTable['settings_obj'].columns.url.editor['component'] = CustomEditorComponent;
          });
        } else {
          const editMode = { actions: { edit: false, add: false, delete: false, columnTitle: '' } };
          tables.cloudLinksTables.forEach((cloudLinkTable: any) => {
            cloudLinkTable['settings_obj'] = Object.assign(cloudLinkTable['settings_obj'], editMode);
          });
          this.tables_array = tables.cloudLinksTables;
        }
      }
    });
  }

  addTable() {
    this.table_settings_object = {
      delete: { confirmDelete: true },
      add: { confirmCreate: true },
      edit: { confirmSave: true },
      attr: { id: this.tableName, class: 'table' },
      pager: { display: true, perPage: 5 },
      columns: {
        id: { title: 'ID', filter: { sortDirection: 'asc' } },
        name: { title: 'Name' },
        desc: { title: 'Description', editor: { type: 'textarea' } },
        url: { title: 'Link', type: 'html', editor: { type: 'custom', component: CustomEditorComponent } }
      }
    };
    this.tables_array.push({ tableId: this.tableName, settings_obj: this.table_settings_object, data: [] });
    this.cloud_links_service.addCloudLinkTable({
      tableId: this.tableName,
      settings_obj: this.table_settings_object,
      data: []
    }).subscribe(data => {
      if (!data.success) {
        this.toastr.error(JSON.stringify(data.msg));
      } else {
        this.toastr.success('Table ' + data.cloudLinkTable.tableId + ' Was Created');
      }
    });
  }

  onCreateConfirm(event: any, tableId: any) {
    if (window.confirm('Are you sure you want to create?')) {
      this.cloud_links_service.addEntryToCloudLinkTable(tableId.tableId, event.newData).subscribe(data => {
        if (data.success) {
          this.toastr.success('new Entry was added to the table ' + tableId.tableId);
        } else {
          this.toastr.error('Something Went Wrong');
        }
      });
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event: any, tableId: any) {
    if (window.confirm('Are you sure you want to save?')) {
      this.cloud_links_service.deleteEntryFromCloudTable(tableId.tableId, event.data).subscribe(data => {
        if (!data.success) {
          this.toastr.error('Something Went Wrong on update delete');
        } else {
          this.cloud_links_service.addEntryToCloudLinkTable(tableId.tableId, event.newData).subscribe(data => {
            if (!data.success) {
              this.toastr.error('Something Went Wrong on update add');
            } else {
              this.toastr.success('An Entry was updated in the table ' + tableId.tableId);
            }
          });
        }
      });
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event: any, tableId: any) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.cloud_links_service.deleteEntryFromCloudTable(tableId.tableId, event.data).subscribe(data => {
        if (data.success) {
          this.toastr.success('A row was successfully deleted from the table ' + tableId.tableId);
        } else {
          this.toastr.error('Something Went Wrong');
        }
      });
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  deleteTable() {
    this.tables_array.forEach((table, index) => {
      if (table['tableId'] === this.tableName) {
        this.tables_array.splice(index, 1);
        this.cloud_links_service.deleteCloudLinkTable(this.tableName).subscribe(table => {
          if (!table.success) {
            this.toastr.error(table.msg);
          } else {
            this.toastr.success('Table ' + this.tableName + ' was deleted');
          }
        });
      }
    });
  }
}

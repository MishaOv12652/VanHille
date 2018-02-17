import {Component, OnInit} from '@angular/core';
// import {Node} from '@angular/compiler';
// import {Ng2SmartTableModule} from 'ng2-smart-table';
import {CloudlinksService} from '../services/cloudlinks.service';
import {FlashMessagesService} from 'angular2-flash-messages'
import * as url from "url";

@Component({
  selector: 'app-cloudlinks',
  templateUrl: './cloudlinks.component.html',
  styleUrls: ['./cloudlinks.component.css']
})
export class CloudlinksComponent implements OnInit {
  tableName: string;
  table_settings_object: any;
  tables_array: Array<Object>;


  constructor(private  cloud_links_service: CloudlinksService,private flashmessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.cloud_links_service.getAllCloudLinkTables().subscribe(tables => {
      if(!tables.success){
        this.flashmessage.show(tables.msg,{ cssClass: 'alert-danger', timeout: 3000 })
      }else {
        this.tables_array = tables.cloudLinksTables;
      }

    });
  }

  addTable() {
    this.table_settings_object = {
      delete: {
        confirmDelete: true,
      },
      add: {
        confirmCreate: true,
      },
      edit: {
        confirmSave: true,
      },
      attr:{
        id: this.tableName,
        class:'table misha'
      },
      pager:{
        display:true,
        perPage:10
      },
      columns: {
        id: {
          title: 'ID',
          filter:{
            sortDirection:'asc'
          }
        },
        name: {
          title: 'Name'
        },
        desc: {
          title: 'Description'
        },
        url: {
          title: 'URL',
          type:'html'
        }
      }
    };
    this.tables_array.push({tableId: this.tableName, settings_obj: this.table_settings_object, data: []});
    this.cloud_links_service.addCloudLinkTable({tableId: this.tableName, settings_obj: this.table_settings_object, data: []}).subscribe(data=>{
      if(!data.success){
        this.flashmessage.show(JSON.stringify(data.msg), { cssClass: 'alert-danger', timeout: 3000 });
      }else{
        this.flashmessage.show('Table ' + JSON.stringify(data.cloudLinkTable.tableId) + ' Was Created ' , { cssClass: 'alert-success', timeout: 3000 });
      }
    });
  }

  onCreateConfirm(event,tableId){
    if (window.confirm('Are you sure you want to create?')) {
      if(!(event.newData['url'].includes("http://")) && !(event.newData['url'].includes("https://"))){
        event.newData['url'] = "https://" + event.newData['url'];
      }
      event.newData['url'] = '<a href="' + event.newData['url'] +'">' + event.newData['url'].replace("http://","") + '</a>';
      console.log(event.newData);
      this.cloud_links_service.addEntryToCloudLinkTable(tableId.tableId,event.newData).subscribe(data=>{
        if(!data.err){
          this.flashmessage.show('new Entry was added to the table ' + tableId.tableId,{ cssClass: 'alert-success', timeout: 3000 });
        }else{
          this.flashmessage.show('Something Went Wrong',{ cssClass: 'alert-danger', timeout: 3000 })
        }
      });
      event.confirm.resolve(event.newData);

    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event,tableId) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event,tableId){
    if (window.confirm('Are you sure you want to delete?')) {
      this.cloud_links_service.deleteEntryFromCloudTable(tableId.tableId,event.data).subscribe(data=>{
        if(!data.err){
          this.flashmessage.show('A row was successfully deleted from the table ' + tableId.tableId,{ cssClass: 'alert-success', timeout: 3000 })
        }else{
          this.flashmessage.show('Something Went Wrong',{ cssClass: 'alert-danger', timeout: 3000 })
        }
      });
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  deleteTable(){
    this.tables_array.forEach((table,index) => {
      if(table['tableId'] === this.tableName){
        this.tables_array.splice(index,1);
        this.cloud_links_service.deleteCloudLinkTable(this.tableName).subscribe(table=>{
          if(!table.success){
            this.flashmessage.show(table.msg,{ cssClass: 'alert-danger', timeout: 3000 })
          }else{
            this.flashmessage.show('Table ' + this.tableName + ' was deleted',{ cssClass: 'alert-success', timeout: 3000 })
          }
        });
      }
    });


  }
}

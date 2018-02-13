import { Component, OnInit } from '@angular/core';
import { Node } from '@angular/compiler';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@Component({
  selector: 'app-cloudlinks',
  templateUrl: './cloudlinks.component.html',
  styleUrls: ['./cloudlinks.component.css']
})
export class CloudlinksComponent implements OnInit {
  tableName:string;
  tables:any;



  constructor() {
  }

  ngOnInit() {

   }

  addTable(){
    // var tbl_cont = document.getElementById('tbls');
    // var tbl_header = document.createElement('h3');
    // tbl_header.innerHTML=this.tableName;
    // tbl_header.className="text-center"
    // var tbl = document.createElement('table');
    // tbl.className="table table-bordered table-dark"
    // tbl.setAttribute("id",this.tableName.replace(/\s/g, ''));
    // var tbl_body = document.createElement('tbody');
    // var header_row = document.createElement('tr');
    // var id_header = document.createElement('th');
    // id_header.innerText="Number"
    // var name_header = document.createElement('th');
    // name_header.innerHTML="Name"
    // var desc_header = document.createElement('th');
    // desc_header.innerHTML="Description"
    // var link_header = document.createElement('th');
    // link_header.innerHTML="Link"
    // var add_row_button =document.createElement('button')
    // add_row_button.className="btn btn-primary"
    // add_row_button.innerHTML="add row"
    // add_row_button.setAttribute("id",this.tableName.replace(/\s/g, '') + "addRowButton")
    // add_row_button.onclick=this.addRow;
    // tbl_cont.appendChild(tbl_header);
    // header_row.appendChild(id_header);
    // header_row.appendChild(name_header);
    // header_row.appendChild(desc_header);
    // header_row.appendChild(link_header);
    // header_row.appendChild(add_row_button)
    // tbl_body.appendChild(header_row);
    // tbl.appendChild(tbl_body);
    // tbl_cont.appendChild(tbl);
  }
  addRow(){
    // this.count=this.count+1;
    // var table = document.getElementById("table1");
    // var header_row = document.createElement('tr');
    // var id_header = document.createElement('td');
    // id_header.innerHTML=this.count.toString();
    // var name_header = document.createElement('td');
    // name_header.setAttribute("placeholder","Name")
    // name_header.contentEditable="true"
    // var desc_header = document.createElement('td');
    // desc_header.setAttribute("placeholder","Description")
    // desc_header.contentEditable="true"
    // var link_header = document.createElement('td');
    // link_header.setAttribute("placeholder","Link")
    // link_header.contentEditable="true"
    // var edit_row_button =document.createElement('button')
    // edit_row_button.className="btn btn-danger"
    // edit_row_button.innerHTML="edit"
    // edit_row_button.onclick=this.editRow;
    // header_row.appendChild(id_header);
    // header_row.appendChild(name_header);
    // header_row.appendChild(desc_header);
    // header_row.appendChild(link_header);
    // header_row.appendChild(edit_row_button);
    // table.appendChild(header_row);
  }

  editRow(){

  }

}

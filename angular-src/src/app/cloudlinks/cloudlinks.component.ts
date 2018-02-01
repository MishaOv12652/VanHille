import { Component, OnInit } from '@angular/core';
import { Node } from '@angular/compiler';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-cloudlinks',
  templateUrl: './cloudlinks.component.html',
  styleUrls: ['./cloudlinks.component.css']
})
export class CloudlinksComponent implements OnInit {
  settings:any;
  data:any;
  constructor() { 
    
  }

  ngOnInit() {
    this.settings = {
      attr:{
        class:"input"
      },
      actions:{
        position:'right'
      },
      columns: {
        num: {
          title: 'Number',
          editable:false,
          class:"misha"
        },
        name: {
          title: 'Name',
          class:"misha"
        },
        desc: {
          title: 'Description',
          class:"misha"
        },
        link: {
          title: 'Link',
          type:'html',
          class:"misha"
        }
      }
    };
    this.data=[
      {
        num: 1,
        name: 'Leanne Graham',
        desc: 'Bret',
        link: '<a href="http://www.google.com">Google</a>',
      },
      {
        num: 2,
        name: 'Ervin Howell',
        desc: 'Antonette',
        link: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
      },
      {
        num: 3,
        name: 'Clementine Bauch',
        desc: 'Samantha',
        link: '<a href="https://github.com/akveo/ng2-smart-table">Ng2 smart table</a>',
      },
      {
        num: 4,
        name: 'Patricia Lebsack',
        desc: 'Karianne',
        link: '<a href="https://github.com/akveo/blur-admin">Blur Admin</a>',
      },
    ];
    

    
  }

  // addTable(){
  //   var tablechild = document.createElement('table');

  // }

}

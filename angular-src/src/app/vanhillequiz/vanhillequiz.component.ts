import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vanhillequiz',
  templateUrl: './vanhillequiz.component.html',
  styleUrls: ['./vanhillequiz.component.css']
})
export class VanhillequizComponent implements OnInit {
  showForm:Boolean=true;
  constructor() { }

  ngOnInit() {
  }
  showhideform(flag:Boolean){
    this.showForm=flag;
  }
}

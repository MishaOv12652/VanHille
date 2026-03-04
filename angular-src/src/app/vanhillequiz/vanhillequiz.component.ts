import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VanhileformComponent } from './vanhileform/vanhileform.component';
import { QuestionsComponent } from './questions/questions.component';

@Component({
  selector: 'app-vanhillequiz',
  templateUrl: './vanhillequiz.component.html',
  styleUrls: ['./vanhillequiz.component.css'],
  standalone: true,
  imports: [CommonModule, VanhileformComponent, QuestionsComponent]
})
export class VanhillequizComponent implements OnInit {
  showForm: boolean = true;

  constructor() {}

  ngOnInit() {}

  showhideform(flag: boolean) {
    this.showForm = flag;
  }
}

import {Component, OnInit} from '@angular/core';
import {VanhilereportService} from '../../../services/vanhilereport.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import set = Reflect.set;

@Component({
  selector: 'app-class-report',
  templateUrl: './class-report.component.html',
  styleUrls: ['./class-report.component.css']
})
export class ClassReportComponent implements OnInit {
  // show comparison mode
  showpast: boolean = false;

  constructor(private reportServise: VanhilereportService,
              private flashmessage: FlashMessagesService) {
  }

  ngOnInit() {
  }


  showPast() {
    this.showpast = !this.showpast;
  }
}

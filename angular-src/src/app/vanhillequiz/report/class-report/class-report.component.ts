import {Component, OnInit} from '@angular/core';
import {VanhilereportService} from '../../../services/vanhilereport.service';
import {ToastrService} from 'ngx-toastr';
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
              private toastr: ToastrService) {
  }

  ngOnInit() {
  }


  showPast() {
    this.showpast = !this.showpast;
  }
}

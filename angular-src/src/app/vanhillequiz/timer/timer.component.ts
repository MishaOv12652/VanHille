import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  standalone: true,
  imports: []
})
export class TimerComponent implements OnInit, OnDestroy {
  ticks = 0;
  minutesDisplay: any = 0;
  hoursDisplay: any = 0;
  secondsDisplay: any = 0;
  sub: Subscription;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  private startTimer() {
    this.sub = interval(1000).subscribe(t => {
      this.ticks = t + 1;
      this.secondsDisplay = this.getSeconds(this.ticks);
      this.minutesDisplay = this.getMinutes(this.ticks);
      this.hoursDisplay = this.getHours(this.ticks);
    });
  }

  private getSeconds(ticks: number) { return this.pad(ticks % 60); }
  private getMinutes(ticks: number) { return this.pad((Math.floor(ticks / 60)) % 60); }
  private getHours(ticks: number) { return this.pad(Math.floor((ticks / 60) / 60)); }
  private pad(digit: any) { return digit <= 9 ? '0' + digit : digit; }
}

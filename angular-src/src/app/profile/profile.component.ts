import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.getProfile().subscribe(
      profile => { this.user = profile.user; },
      err => { console.log(err); }
    );
  }
}

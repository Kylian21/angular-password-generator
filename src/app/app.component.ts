import { Component, OnInit } from '@angular/core';

import { PasswordService } from './services/password.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'PASSWORD GENERATOR';

  constructor(private passwordService: PasswordService) {}

  ngOnInit() {
    // this.passwordService.getPassword('1','10','0','0','0').subscribe(response => console.log(response));
  }
}

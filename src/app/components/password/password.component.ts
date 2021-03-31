import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  title:string = 'Your secure password';
  // choice = 0;
  password:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onGenerate(){
    this.password = 'hfdsqoc%';
  }
}

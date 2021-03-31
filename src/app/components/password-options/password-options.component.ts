import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-options',
  templateUrl: './password-options.component.html',
  styleUrls: ['./password-options.component.css']
})
export class PasswordOptionsComponent implements OnInit {
  lenght:number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}

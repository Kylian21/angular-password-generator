import { Component, OnInit } from '@angular/core';

import { PasswordService } from '../../services/password.service';
import { GeneratedPassword } from '../../models/GeneratedPassword';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent implements OnInit {
  title: string = 'Your secure password';
  password: string = '';
  length: number = 16;
  hasUpperCase: boolean = true;
  hasSymbols: boolean = true;
  hasNumbers: boolean = true;

  constructor(private passwordService: PasswordService) {}

  ngOnInit(): void {}

  onGenerate() {
    this.passwordService
      .getPassword('10', '0', '0', '0')
      .subscribe((passwords: string[]) => (this.password = passwords[0]));
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  length = new FormControl(15);
  hasUpperCase = new FormControl(true);
  hasSymbols = new FormControl(true);
  hasNumbers = new FormControl(true);

  constructor(private passwordService: PasswordService,) {}

  ngOnInit(): void {}

  onGenerate() {
    this.passwordService
      .getPassword(
        this.length.value,
        this.booleanToString(this.hasNumbers.value),
        this.booleanToString(this.hasUpperCase.value),
        this.booleanToString(this.hasSymbols.value)
      )
      .subscribe((passwords: string[]) => (this.password = passwords[0]));
  }

  booleanToString(value: Boolean): string {
    return value ? '1' : '0';
  }
}

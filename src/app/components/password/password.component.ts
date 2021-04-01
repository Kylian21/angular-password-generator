import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { PasswordService } from '../../services/password.service';
import { GeneratedPassword } from '../../models/GeneratedPassword';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent implements OnInit {
  selectedButton = new FormControl(1);
  password: string = '';
  passwordOptions = new FormGroup({
    length: new FormControl(15),
    hasUpperCase: new FormControl(true),
    hasSymbols: new FormControl(true),
    hasNumbers: new FormControl(true),
  });

  constructor(private passwordService: PasswordService) {}

  ngOnInit(): void {
    this.onGenerate();
  }

  onGenerate() {
    this.passwordService
      .getPassword(
        this.passwordOptions.value.length,
        this.passwordOptions.value.hasNumbers,
        this.passwordOptions.value.hasUpperCase,
        this.passwordOptions.value.hasSymbols
      )
      .subscribe((passwords: string[]) => (this.password = passwords[0]));
  }
}

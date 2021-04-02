import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { PasswordService } from '../../services/password.service';
import { GeneratedPassword } from '../../models/GeneratedPassword';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent implements OnInit {
  password: string = '';
  error: string = '';
  selectedButton = new FormControl(1);
  passwordOptions = this.fb.group({
    length: [15, [Validators.minLength(8), Validators.maxLength(32)]],
    hasNumbers: [true],
    hasUpperCase: [true],
    hasSymbols: [true],
  });

  constructor(
    private passwordService: PasswordService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.onGenerate();
  }

  onGenerate() {
    const {
      length,
      hasNumbers,
      hasUpperCase,
      hasSymbols,
    } = this.passwordOptions.value;

    this.passwordService
      .getPassword(length, hasNumbers, hasUpperCase, hasSymbols)
      .subscribe(
        (passwords: string[]) => (this.password = passwords[0]),
        (error) => {
          this.error = error;
        }
      );
  }

  get length() {
    return this.passwordOptions.get('length');
  }
}

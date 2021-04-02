import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

import { PasswordService } from '../../services/password.service';
import { GeneratedPassword } from '../../models/GeneratedPassword';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent implements OnInit {
  passwords: Observable<ReadonlyArray<string>> | null = null;
  error: string = '';
  passwordOptions = this.fb.group({
    limit: [
      1,
      [Validators.required, Validators.min(1), this.numberValidator()],
    ],
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
      limit,
      length,
      hasNumbers,
      hasUpperCase,
      hasSymbols,
    } = this.passwordOptions.value;
    if (this.passwordOptions.valid) {
      this.passwords = this.passwordService.getPassword(
        limit,
        length,
        hasNumbers,
        hasUpperCase,
        hasSymbols
      );
    }
  }
  get passwordOptionsControl() {
    return this.passwordOptions.controls;
  }
  get length() {
    return this.passwordOptions.get('length');
  }

  numberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!control.value) {
        return null;
      }
      return Number(control.value.toString()) ? null : { invalidNumber: true };
    };
  }
}

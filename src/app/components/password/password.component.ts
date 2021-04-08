import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { PasswordService } from '../../services/password/password.service';
import { InputValidators } from '../../validators/InputValidators';
import { GeneratedPassword } from '../../models/GeneratedPassword';
import { GeneratedPasswordError } from '../../models/GeneratedPasswordError';
import { PasswordState, State } from '../../models/PasswordState';
import { Observable, of, interval } from 'rxjs';
import {
  switchMap,
  debounceTime,
  startWith,
  catchError,
  retryWhen,
} from 'rxjs/operators';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent {
  readonly componentState$: Observable<PasswordState>;
  readonly inputValidators: InputValidators = new InputValidators();
  passwordOptions: FormGroup = this.fb.group({
    limit: [
      1,
      [
        Validators.required,
        Validators.min(1),
        this.inputValidators.numberValidator(),
      ],
    ],
    length: [15, [Validators.min(8), Validators.max(32)]],
    hasNumbers: [true],
    hasUpperCase: [true],
    hasSymbols: [true],
  });

  constructor(
    private passwordService: PasswordService,
    private fb: FormBuilder
  ) {
    this.componentState$ = this.passwordOptions.valueChanges.pipe(
      debounceTime(500),
      startWith(this.passwordChanges),
      switchMap(() => this.passwordChanges()),
      startWith({
        passwords: [],
        state: State.Loading,
      })
    );
  }

  passwordChanges(): Observable<PasswordState> {
    const {
      limit,
      length,
      hasNumbers,
      hasUpperCase,
      hasSymbols,
    } = this.passwordOptions.value;
    if (this.passwordOptions.valid) {
      return this.passwordService
        .getPassword(limit, length, hasNumbers, hasUpperCase, hasSymbols)
        .pipe(
          catchError((err: unknown) => {
            if (err instanceof GeneratedPasswordError) {
              return of({
                passwords: [],
                errorMessage: err.message,
                state: State.Error,
              });
            } else {
              return of({
                passwords: [],
                errorMessage: 'An unexpected error occured',
                state: State.Error,
              });
            }
          })
        );
    }
    return of({
      passwords: [],
      errorMessage: 'Invalid inputs',
      state: State.Error,
    });
  }
}

import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-password-options',
  templateUrl: './password-options.component.html',
  styleUrls: ['./password-options.component.css'],
})
export class PasswordOptionsComponent {
  @Input() passwordOptions: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  get passwordOptionsControl() {
    return this.passwordOptions.controls;
  }
  get length() {
    return this.passwordOptions.get('length');
  }
}

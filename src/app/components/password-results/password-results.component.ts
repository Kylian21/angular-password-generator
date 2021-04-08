import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { PasswordState } from '../../models/PasswordState';

@Component({
  selector: 'app-password-results',
  templateUrl: './password-results.component.html',
  styleUrls: ['./password-results.component.css'],
})
export class PasswordResultsComponent {
  @Input() componentState: Observable<PasswordState> | null = null;
  @Input() passwordOptions: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}
}

import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { PasswordState, FetchPasswordData } from '../../models/PasswordState';
import { LocalStorageService } from '../../services/localStorage/local-storage.service';

@Component({
  selector: 'app-password-results',
  templateUrl: './password-results.component.html',
  styleUrls: ['./password-results.component.css'],
})
export class PasswordResultsComponent {
  @Input() passwords?: ReadonlyArray<string>;
  @Input() errorMessage?: string = 'Uninitialized Value';
  @Input() state?: FetchPasswordData = FetchPasswordData.Error;
  @Input() passwordOptions: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private storageService: LocalStorageService
  ) {}

  onSave(password: string) {
    this.storageService.savePassword(password);
  }

  get FetchPasswordData(): typeof FetchPasswordData {
    return FetchPasswordData;
  }
}

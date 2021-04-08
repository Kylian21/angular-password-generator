import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/localStorage/local-storage.service';

@Component({
  selector: 'app-saved-passwords',
  templateUrl: './saved-passwords.component.html',
  styleUrls: ['./saved-passwords.component.css'],
})
export class SavedPasswordsComponent {
  constructor(private storageService: LocalStorageService) {}

  passwords(): string[] {
    return this.storageService.getPasswords();
  }
}

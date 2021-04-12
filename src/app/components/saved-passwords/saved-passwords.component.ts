import { Component, ElementRef } from '@angular/core';
import { LocalStorageService } from '../../services/localStorage/local-storage.service';

@Component({
  selector: 'app-saved-passwords',
  templateUrl: './saved-passwords.component.html',
  styleUrls: ['./saved-passwords.component.css'],
})
export class SavedPasswordsComponent {
  passwords(): string[] {
    return this.storageService.getPasswords();
  }
  itemClicked: string = '';
  constructor(
    private storageService: LocalStorageService,
    private eRef: ElementRef
  ) {}

  onClick(item: string) {
    this.itemClicked = item;
    console.log(item);
  }
}

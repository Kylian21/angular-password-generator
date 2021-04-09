import { Component, ElementRef } from '@angular/core';
import { LocalStorageService } from '../../services/localStorage/local-storage.service';
import { Observable, fromEvent, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-saved-passwords',
  templateUrl: './saved-passwords.component.html',
  styleUrls: ['./saved-passwords.component.css'],
})
export class SavedPasswordsComponent {
  readonly clickEmmiter: Observable<string> = fromEvent(
    this.eRef.nativeElement,
    'click'
  ).pipe(map((x) => ((x as Event).target as Element).id));
  passwords(): string[] {
    return this.storageService.getPasswords();
  }

  constructor(
    private storageService: LocalStorageService,
    private eRef: ElementRef
  ) {}
}

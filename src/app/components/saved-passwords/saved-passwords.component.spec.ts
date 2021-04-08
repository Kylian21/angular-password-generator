import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPasswordsComponent } from './saved-passwords.component';

describe('SavedPasswordsComponent', () => {
  let component: SavedPasswordsComponent;
  let fixture: ComponentFixture<SavedPasswordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedPasswordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedPasswordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

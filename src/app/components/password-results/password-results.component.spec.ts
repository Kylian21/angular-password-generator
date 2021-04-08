import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResultsComponent } from './password-results.component';

describe('PasswordResultsComponent', () => {
  let component: PasswordResultsComponent;
  let fixture: ComponentFixture<PasswordResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

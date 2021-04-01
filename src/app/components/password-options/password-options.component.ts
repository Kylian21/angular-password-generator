import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-password-options',
  templateUrl: './password-options.component.html',
  styleUrls: ['./password-options.component.css'],
})
export class PasswordOptionsComponent implements OnInit {
  @Input() length!: number;
  @Input() hasUpperCase!: boolean;
  @Input() hasSymbols!: boolean;
  @Input() hasNumbers!: boolean;
  @Output() onGenerate: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.onGenerate.emit();
  }
}

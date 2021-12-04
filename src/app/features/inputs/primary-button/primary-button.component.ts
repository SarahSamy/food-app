import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit {
@Input() btnText:string='';
  @Output() signUpClick = new EventEmitter<Event>();
  constructor() { }

  ngOnInit() {
  }
  register() {
    this.signUpClick.emit();
  }
}

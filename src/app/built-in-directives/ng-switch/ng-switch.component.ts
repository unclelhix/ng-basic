import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {
  @Input() title:string = '';
  @Output() inputValueChange = new EventEmitter<number>();
  inputNumber: number = 0;
  constructor() { }

  ngOnInit() {
  }
  onValueChange(value:any){
    console.log('Value: ', value)
    this.inputValueChange.emit(value);
  }

}

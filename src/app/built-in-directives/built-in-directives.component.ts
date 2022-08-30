import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-directives',
  templateUrl: './built-in-directives.component.html',
  styleUrls: ['./built-in-directives.component.scss']
})
export class BuiltInDirectivesComponent implements OnInit {

  title:string =  "Built-in structural directives";

  childInputValue: number = 0;
  childEventHanlder(value: any) {
    this.childInputValue = value;
  }

  constructor() { }

  ngOnInit() {
  }

}

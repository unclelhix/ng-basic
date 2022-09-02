import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
  @Input() title:string = '';

  buttonName: string = "Show!"
  count: number = 0;
  show:boolean = false;
  textInput: string = '';

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.show = !this.show;
    if(this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show!";
  }
}

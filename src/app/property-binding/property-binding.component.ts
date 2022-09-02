import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  title: string = "Property Binding";
  color: string = '#eb4034';
  placeHolder:string = "username ";
  inputValue:string = "Sample Value";

  sampleStyle:any = {
    'display': 'block',
    'cursor': 'pointer'
  };

  constructor() {

  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-types',
  templateUrl: './data-types.component.html',
  styleUrls: ['./data-types.component.scss']
})
export class DataTypesComponent implements OnInit {

  constructor() {
    console.log("Constructor");
  }

  ngOnInit() {

    console.log("On Init");

    let nullVariable: null = null;

    let numberVariable: number = 123;

    let numberWithDecimalVariable: number = 123.456;

    let stringVariable: string = 'This is a string';

    let undefinedVariable: undefined = undefined;

    let booleanVariable: boolean = true;

    /**
     * Any Data type
     */

    let nullAny: any = null;

    let numberAny: any = 123;

    let numberWithDecimalAny: any = 123.456;

    let stringAny: any = 'This is a string';

    let undefinedAny: any = undefined;

    let booleanAny: any = true;

  }

}

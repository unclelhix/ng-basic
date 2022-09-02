import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-forms-validation',
  templateUrl: './forms-validation.component.html',
  styleUrls: ['./forms-validation.component.scss']
})
export class FormsValidationComponent implements OnInit {
  title:string = "ngModel Sample"
  customer: Customer = {} as Customer; //"Definite Assignment Assertion" (!) to tell TypeScript that we know this value

    constructor() { }

  ngOnInit() {
  }

  onSave(customerForm: NgForm){
    console.log(customerForm.valid);
    if(customerForm.valid){
      //save
      console.log(this.customer);
    }
  }

}

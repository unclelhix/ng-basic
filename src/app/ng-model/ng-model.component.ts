import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent implements OnInit {
  title:string = "ngModel Sample"
  customer: Customer = {} as Customer; //"Definite Assignment Assertion" (!) to tell TypeScript that we know this value


  constructor() { }

  ngOnInit() {
  }
  onSubmit(it: NgForm) {
    console.log(it.value);  // { first: '', last: '' }
    console.log(it.valid);  // false
  }
  onSave(customerForm: NgForm){
    console.log(customerForm.valid);
    console.log(this.customer)
  }
}

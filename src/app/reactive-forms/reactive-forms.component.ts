import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  title: string = 'Raective Forms';
  isSuccess: boolean = false;
  status: string = '';
  customerForm: FormGroup = {} as FormGroup;
  customer: Customer = {} as Customer;
  errorMessage: string[] = [];
  employeeStatusIdInputValue: number = 0;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private customerService: CustomerService)
    {
      this.customer = this.route.snapshot.data.customer;
    }

  ngOnInit() {
    this.initForm();
  }
  employeeStatusEventHanlder(value: any) {
    this.employeeStatusIdInputValue = value;
    console.log('Value: ', value)
  }
  initForm() {

    this.customerForm = this.fb.group(
      {
        firstName: [this.customer ? this.customer.firstName : null, Validators.required],
        lastName: [this.customer ? this.customer.lastName : null, Validators.required],
        birthday: [this.customer ? this.customer.birthday : null],
        email: [this.customer ? this.customer.email : null, Validators.required],
        mobileNumber: [this.customer ? this.customer.mobileNumber : null, Validators.required],
      });
  }

  save() {

    if (this.customerForm.valid) {

      if(this.errorMessage.length > 0)
      this.errorMessage = [];

      if (!this.customer) {
        this.customerService.addCustomer(this.customerForm.value).subscribe(res => {
          if (!res.data) this.errorMessage = res.errorMessages;
          else
          {
            this.status = 'Added'
            this.isSuccess = true ;
            this.errorMessage = [];
          }
        });
      } else {
        const customer = {
          id: this.customer.id,
          ...this.customerForm.value
        }
        this.customerService.updateCustomer(customer).subscribe(res => {
          if (!res.data) this.errorMessage = res.errorMessages;
          else {
            this.status = 'Updated'
            this.isSuccess = true ;
            this.errorMessage = [];
          }
        });
      }
    }else{
      this.errorMessage.push("Please the following fields.")
    }
  }
}

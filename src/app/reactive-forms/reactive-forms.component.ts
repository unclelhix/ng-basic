import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Customer } from '../models/customer.model';
import { ErrorMessage } from '../models/error-message.model';
import { ResponseBody } from '../models/response.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  title: string = 'Raective Forms';
  isAdded: boolean = false;

  customerForm: FormGroup = {} as FormGroup;
  customer: Customer= {} as Customer;
  errorMessage: string[] = [];
  constructor(private fb: FormBuilder,
    private customerService: CustomerService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: [null],
      email: ['', Validators.required],
      mobileNumber: ['', Validators.required],
    });
  }

  save() {
    console.log(this.customerForm.value);
    this.customerService.addCustomer(this.customerForm.value).subscribe(res=>{
      this.isAdded = res.data
      if(!res.data){
        this.errorMessage = res.errorMessages;
      }
    });
  }
}

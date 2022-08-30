import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<Customer[] >{
    return this.httpClient.get<Customer[]>("assets/customers.json");
  }
}

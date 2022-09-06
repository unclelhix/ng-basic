import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Customer } from '../models/customer.model';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseBody } from '../models/response.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
private baseURL:string = environment.api.endpoint;

constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<Customer[] >{
    return this.httpClient.get<Customer[]>("assets/customers.json");
  }

  getAllCustomers(): Observable<Customer[] >{
    return this.httpClient.get<Customer[]>(this.baseURL + 'Customers/GetCustomers');
  }

  getCustomerById(id: number):Observable<ResponseBody<any>>{
    return this.httpClient.get<ResponseBody<any>>(`${this.baseURL}Customers/GetCustomerById?id=${id}`);
  }

  getCustomersPaging(
    currentPage:number,
    maxItemsPerPage: number): Observable<ResponseBody<any>>{

    let params = {
      'currentPage': currentPage,
      'ItemsPerPage': maxItemsPerPage
    }

    return this.httpClient.get<ResponseBody<any>>(this.baseURL + 'Customers/GetCustomersPaging', {params: params});
  }

  addCustomer(customer: Customer): Observable<ResponseBody<any>>{
    return this.httpClient.post<ResponseBody<Customer>>(`${this.baseURL}Customers/AddCustomer`, {'customerTransport': customer});
  }
  updateCustomer(customer: Customer): Observable<ResponseBody<any>>{
    return this.httpClient.patch<ResponseBody<Customer>>(`${this.baseURL}Customers/UpdateCustomerInfo`, {'customerTransport': customer});
  }

}

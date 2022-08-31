import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseBody } from '../models/response.model';

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

  getCustomersPaging(
    currentPage:number,
    skipItems: number,
    maxItemsPerPage: number): Observable<ResponseBody<any>>{

    let params = {
      'currentPage': currentPage,
      'skipItems': skipItems,
      'maxItemsPerPage': maxItemsPerPage
    }
    return this.httpClient.get<ResponseBody<any>>(this.baseURL + 'Customers/GetCustomersPaging', {params: params});
  }

}

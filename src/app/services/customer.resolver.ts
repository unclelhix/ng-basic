import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomerService } from './customer.service';

@Injectable({ providedIn: 'root' })
export class CustomerResolver implements Resolve<any> {
  constructor(private customerService: CustomerService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.customerService
      .getCustomerById(route.params.id)
      .pipe(map((res: any) => res.data));
  }
}

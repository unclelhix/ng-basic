import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-service-pipes',
  templateUrl: './service-pipes.component.html',
  styleUrls: ['./service-pipes.component.scss']
})
export class ServicePipesComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  customers = new Array<Customer>();

  ngOnInit() {

    this.customerService.getCustomers()
    .subscribe(res=>{
      this.customers = res.map(item =>
        {
          return new Customer(
            item.id,
            item.firstName,
            item.lastName,
            item.mobileNumber,
            item.email,
            item.createdOn
          );
        });

    });
  }

}

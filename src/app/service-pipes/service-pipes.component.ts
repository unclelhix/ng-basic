import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-service-pipes',
  templateUrl: './service-pipes.component.html',
  styleUrls: ['./service-pipes.component.scss']
})
export class ServicePipesComponent implements OnInit {
  currentPage:number  = 1;
  pageItems:number = 0;
  maxItemsPerPage:number  = 10;
  skipItems = 10;
  customers = new Array<Customer>();

  constructor(private customerService: CustomerService) {

    // this.customerService.getAllCustomers().subscribe(res=>console.log(res));
    // this.customerService.getCustomersPaging(1,10,10).subscribe(res=>console.log(res));

    this.getCustomers();

   }
   ngOnInit() {

    // this.customerService.getCustomers()
    // .subscribe(res=>{
    //   this.customers = res.map(item =>
    //     {
    //       return new Customer(
    //         item.id,
    //         item.firstName,
    //         item.lastName,
    //         item.mobileNumber,
    //         item.email,
    //         item.createdOn
    //       );
    //     });

    // });
  }
   getCustomers(){
    this.customerService.getCustomersPaging(this.currentPage,this.skipItems,this.maxItemsPerPage)
    .pipe(
      map(res => res) // or any other operator
    ).subscribe(res => {
      this.customers = res.data;
      this.pageItems = Number(res.maxItems);
    });
   }


  onTableDataChange(event:any){
    this.currentPage  = event;
    this.getCustomers();
  }

  onTableSizeChange(event:any): void {
    this.maxItemsPerPage = event.target.value;
    this.currentPage = 1;
    this.getCustomers();
  }
}

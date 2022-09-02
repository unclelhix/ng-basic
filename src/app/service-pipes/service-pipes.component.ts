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
  totalItems:number = 0;
  itemsPerPage:number  = 10;
  skipItems = 10;
  customers = new Array<Customer>();
  tableSize = [10, 20, 30, 50];
  pagingConfig: any;

  constructor(private customerService: CustomerService) {

    // this.customerService.getAllCustomers().subscribe(res=>console.log(res));
    // this.customerService.getCustomersPaging(1,10,10).subscribe(res=>console.log(res));

    this.getCustomers();

    this.pagingConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems:  this.totalItems
    }

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
    this.customerService.getCustomersPaging(this.currentPage,this.skipItems,this.itemsPerPage)
    .pipe(
      map(res => res) // or any other operator
    ).subscribe(res => {
      this.customers = res.data;
      this.totalItems = Number(res.data.length)
    });
   }


  onTableDataChange(event:any){
    this.pagingConfig.currentPage  = event;
  }

  onTableSizeChange(event:any): void {
    this.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.getCustomers();
  }
}

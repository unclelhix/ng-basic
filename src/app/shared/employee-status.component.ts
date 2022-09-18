import { Component, EventEmitter, OnInit, Output } from "@angular/core";

export enum EmployeeStatus {
  Provationary = 1,
  Regular = 2,
  Contractual = 3,
  Consultant = 4,
  JobOrder = 5
}

@Component({
  selector: 'app-employee-status',
  template: `
    <div class="form-group row">
    <label for="employeeStatus" class="col-sm-4 col-form-label">Employee Status</label>
    <div class="col-sm-8">
    <select class="form-control" id="employeeStatus"
    [(ngModel)]="employeeStatus"
    (ngModelChange)="onValueChange($event)">
      <option *ngFor="let status of this.enumKeys" [ngValue]="status"
      >{{employeeStatuses[status]}}</option>
    </select>
    </div>
  </div>
  `,
})
export class EmployeeStatusComponent implements OnInit {
  keys = Object.keys;
  employeeStatuses = EmployeeStatus;
  enumKeys:any[] = [];
  employeeStatus:EmployeeStatus =  {} as EmployeeStatus;

  @Output() employeeStatusValueChange = new EventEmitter<number>();

  constructor(){
    this.enumKeys = Object.keys(this.employeeStatuses).filter(f => !isNaN(Number(f)));
  }
  onValueChange(value:any){

    this.employeeStatusValueChange.emit(value);
  }
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }

}

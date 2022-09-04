export interface Customer {
  id:number;
  firstName: string;
  lastName: string;
  birthday: Date;
  mobileNumber: string;
  email: string;
}

export class Customer{
  public id:number;
  public firstName: string;
  public lastName: string;
  public birthday: Date;
  public mobileNumber: string;
  public email: string;
  public createdOn : Date;
  public createdBy: string;
  public lastModified: Date;
  public lastModifiedBy: string;

  public constructor(id:number,
    firstName:string,
    lastName:string,
    birthday: Date,
    mobileNumber:string,
    email: string,
    createdOn: Date,
    createdBy: string,
    lastModified: Date,
    lastModifiedBy: string) {

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.mobileNumber = mobileNumber;
    this.email = email;
    this.createdOn = createdOn;
    this.createdBy = createdBy;
    this.lastModified = lastModified;
    this.lastModifiedBy = lastModifiedBy;
  }

}

export class Customer{
  public id:number;
  public firstName: string;
  public lastName: string;
  public mobileNumber: string;
  public email: string;
  public createdOn : Date;

  public constructor(id:number, firstName:string, lastName:string,mobileNumber:string,email: string, createdOn: Date ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.mobileNumber = lastName;
    this.email = lastName;
    this.createdOn = createdOn;
  }
}

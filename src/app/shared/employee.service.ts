import { Employee } from './employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  formData : Employee = {
    CustomerId : null,
    AccountType : null,
    AccountNumber : null,
    Amount : null,
    Id : null
  };

  //Web API URL
  readonly rootUrl = 'http://localhost:61004/api';
  list : Employee[];

  constructor(private http : HttpClient) { }

  //Talk to API services
  postPaymentDetail() {
    //Post url from web API
    //this.formData.CardNumber = this.formData.CardNumber + "";
    console.log(this.formData);
    // return this.http.post(this.rootUrl+'/PaymentDetails', this.formData);
  }

  updatePaymentDetail() {
    //Post url from web API
    // return this.http.put(this.rootUrl+'/PaymentDetails/'+this.formData.Id, this.formData);
  }

  deletePaymentDetail(Id) {
    // return this.http.delete(this.rootUrl+'/PaymentDetails/'+Id);
  }

  //Get all records from API
  refreshList(){
    // this.http.get(this.rootUrl+'/PaymentDetails').toPromise()
    // .then(res => this.list = res as Employee[] );
  }

}

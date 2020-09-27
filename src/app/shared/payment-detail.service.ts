import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  
  formData : PaymentDetail = {
    CVV : null,
    CardNumber : null,
    CardOwnerName : null,
    CardType : null,
    ExpirationDate : null,
    Id : null
  };

  //Web API URL
  readonly rootUrl = 'http://localhost:61004/api';
  list : PaymentDetail[];

  constructor(private http : HttpClient) { }

  //Talk to API services
  postPaymentDetail() {
    //Post url from web API
    console.log(this.formData);
    return this.http.post(this.rootUrl+'/PaymentDetails', this.formData);
  }

  updatePaymentDetail() {
    //Post url from web API
    return this.http.put(this.rootUrl+'/PaymentDetails/'+this.formData.Id, this.formData);
  }

  deletePaymentDetail(Id) {
    return this.http.delete(this.rootUrl+'/PaymentDetails/'+Id);
  }

  //Get all records from API
  refreshList(){
    this.http.get(this.rootUrl+'/PaymentDetails').toPromise()
    .then(res => this.list = res as PaymentDetail[] );
  }

}

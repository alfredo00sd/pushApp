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
  readonly rootUrl = 'http://localhost:61004/api/';

  constructor(private http : HttpClient) { }

  //Talk to API services
  postPaymentDetail(formData:PaymentDetail){
    //Post url from web API
   return this.http.post(this.rootUrl+'PaymentDetails', formData);
  }

}

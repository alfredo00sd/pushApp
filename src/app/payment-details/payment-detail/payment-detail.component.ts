import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service : PaymentDetailService, public toastr : ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  // Clear form data
  resetForm(form ?: NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      Id : 0,
      CardOwnerName : "",
      CardType : "",
      CardNumber : "",
      ExpirationDate : "",
      CVV : ""
    }
  }
  // Here we have the data ones someone submit the form, then here we can access form-data.

  onSubmit(form : NgForm){
    //Post form data to API.
    this.service.postPaymentDetail(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success("Submitted Successfuly", "AngularApp")
      },
      err => {
        console.log(err);
      }
    )
    
  }

}

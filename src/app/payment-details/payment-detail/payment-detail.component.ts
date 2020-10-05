import { EmployeeService } from 'src/app/shared/employee.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service : EmployeeService, public toastr : ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  // Clear form data
  resetForm(form ?: NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      Id : 0,
      CustomerId : "",
      AccountType : "",
      AccountNumber : 0,
      Amount : 0
    }
  }

  // Here we have the data ones someone submit the form, then here we can access form-data.

  onSubmit(form : NgForm) {
    
    if(this.service.formData.Id == 0)
      console.log("Adding");
      //this.insertRecord(form);
    else
    console.log("Editing");
    //this.updateRecord(form);
  }

  insertRecord(form : NgForm) {
    
    //Post form data to API.
    // this.service.postPaymentDetail().subscribe(
    //   res => {
    //     this.resetForm(form);
    //     this.toastr.success("Submitted Successfuly", "AngularApp");
    //     this.service.refreshList();
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }

  updateRecord(form : NgForm) {
    
    //Post form data to API.
    // this.service.updatePaymentDetail().subscribe(
    //   res => {
    //     this.resetForm(form);
    //     this.toastr.info("Data updated Successfuly", "AngularApp");
    //     this.service.refreshList();
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }

}

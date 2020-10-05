import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: []
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service : EmployeeService, public toastr : ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  //Update record by clicking element on the table
  populateForm(pd : Employee) {

    this.service.formData = Object.assign({},pd);
  }

  onDelete(Id) {
    if(confirm("Are u sure to delete this "+Id+" ?")) {
      // this.service.deletePaymentDetail(Id).subscribe(
      //   res => {
      //     this.service.refreshList();
      //     this.toastr.warning('Deleted Successfully','Angular App')
      //   },
      //   err => {
      //     console.log(err);
      //   });
    }
  }
}

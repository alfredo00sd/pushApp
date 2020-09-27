import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppUserService } from 'src/app/shared/app-user.service';

@Component({
  selector: 'app-app-user-form',
  templateUrl: './app-user-form.component.html',
  styleUrls: []
})
export class AppUserFormComponent implements OnInit {

  constructor(public service : AppUserService, public toastr : ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  // Clear form data
  resetForm(form ?: NgForm){
  
    if(form != null)
      form.resetForm();
    this.service.formData = {
      Id : 0,
      Name : "",
      LastName : "",
      Email : "",
      Age : 0,
      Birthday : "",
      UserType : "",
      Hobbies : "",
      Gender : "",
      Comment : ""
    }
  }

  // Here we have the data ones someone submit the form, then here we can access form-data.
  onSubmit(form : NgForm) {
    
    if(this.service.formData.Id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form : NgForm) {
    
    //Post form data to API.
    this.service.postAppUser().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success("Submitted Successfuly", "AngularApp");
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

  updateRecord(form : NgForm) {
    
    //Post form data to API.
    this.service.updateAppUser().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info("Data updated Successfuly", "AngularApp");
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }
}
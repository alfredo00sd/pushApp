import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppUser } from 'src/app/shared/app-user.model';
import { AppUserService } from 'src/app/shared/app-user.service';

@Component({
  selector: 'app-app-user-list',
  templateUrl: './app-user-list.component.html',
  styleUrls: []
})
export class AppUserListComponent implements OnInit {

  constructor(public service : AppUserService, public toastr : ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

    //Update record by clicking element on the table
    populateForm(pd : AppUser) {

      this.service.formData = Object.assign({},pd);
    }
  
    onDelete(Id) {
      if(confirm("Are u sure to delete this?")) {
        this.service.deleteAppUser(Id).subscribe(
          res => {
            this.service.refreshList();
            this.toastr.warning('Deleted Successfully','Angular App')
          },
          err => {
            console.log(err);
          });
      }
    }

}

  

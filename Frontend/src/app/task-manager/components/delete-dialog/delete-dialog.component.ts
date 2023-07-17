import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICrudEntity } from 'src/app/core/models/crudEntity';
import { IResponse } from 'src/app/core/models/response';
import { UserService } from 'src/app/core/services/User/user.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: ICrudEntity, private userService : UserService) {}

    deleteUser() {
      this.userService.deleteAUser(this.data).subscribe({
        next: (response : IResponse)=>{
          this.userService.loadUSers.emit();
        }
      })
    }
}

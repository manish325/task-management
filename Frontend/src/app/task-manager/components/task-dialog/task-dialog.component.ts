import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ICrudEntity } from 'src/app/core/models/crudEntity';
import { IResponse } from 'src/app/core/models/response';
import { UserService } from 'src/app/core/services/User/user.service';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent {
  crudForm = new FormGroup({
    name : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required]),
    number : new FormControl('', [Validators.required]),
    action : new FormControl()
  })
  constructor(@Inject(MAT_DIALOG_DATA) public data: {row : ICrudEntity, operation : 'EDIT' | 'ADD'}, private userService : UserService) {
    if(data.operation === 'EDIT') {
      this.crudForm.patchValue(data.row);
    } else if(data.operation === 'ADD') {
      this.crudForm.markAsTouched();
    }
  }

  addUser() {
    const userDetails = this.crudForm.value;
    delete userDetails.action;
    this.userService.add(userDetails as ICrudEntity).subscribe({
      next: (response : IResponse)=>{
          this.userService.loadUSers.emit();
      }
    })
  }

  updateUser() {
    // const userDetails = this.crudForm.value;
    const userDetails = {
      ...this.crudForm.value,
      id : this.data.row.id
    }
    delete userDetails.action;
    this.userService.update(userDetails as ICrudEntity).subscribe({
      next: (response : IResponse)=>{
          this.userService.loadUSers.emit();
      }
    })
  }

  handleClick() {
    if(this.data.operation === 'ADD')
    this.addUser();
    else 
    this.updateUser();
  }
}

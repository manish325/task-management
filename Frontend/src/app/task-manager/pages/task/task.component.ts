import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICrudEntity, mockData } from 'src/app/core/models/crudEntity';
import { TaskDialogComponent } from '../../components/task-dialog/task-dialog.component';
import { DeleteDialogComponent } from '../../components/delete-dialog/delete-dialog.component';
import { UserService } from 'src/app/core/services/User/user.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{
  tableData : ICrudEntity[] = [];
  displayedColumns : string[] = [];
  constructor(private dialogService : MatDialog, private userService : UserService) {

  }
  ngOnInit(): void {
    this.userService.loadUSers.subscribe({
      next : ()=>{
        this.dialogService.closeAll();
        this.getAllUsers();
      }
    })
    this.getAllUsers();
  }

  editRow( operation : 'EDIT' | 'ADD', row? : ICrudEntity) {
    console.log(row);
    const dialogRef = this.dialogService.open(TaskDialogComponent, {
      data : {
        row : row,
        operation : operation
      }
    });
  } 

  deleteRow(row : ICrudEntity) {
    const dialogRef = this.dialogService.open(DeleteDialogComponent, {
      data : row
    })
  }

  getAllUsers(searchText?:  string) {
    this.userService.getAllUsers(searchText || '').subscribe({
      next : (users : ICrudEntity[])=>{
        this.tableData = users;
        this.tableData = this.tableData.map(data=>{
          return {
            ...data,
            action: ['edit', 'archive']
          }
        })
        if(this.tableData.length)
        this.displayedColumns = Object.keys(this.tableData[0]); 
      }
    })
  }
}

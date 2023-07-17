import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from 'src/app/task-manager/components/delete-dialog/delete-dialog.component';
import { TaskDialogComponent } from 'src/app/task-manager/components/task-dialog/task-dialog.component';
import { TaskComponent } from 'src/app/task-manager/pages/task/task.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
const material = [
  MatTableModule,
  MatIconModule,
  MatDialogModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
]


@NgModule({
  declarations: [
    TaskComponent,
    TaskDialogComponent,
    DeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    ...material,
    ReactiveFormsModule,
    HttpClientModule,
    UserRoutingModule
  ]
})
export class UserModule { }

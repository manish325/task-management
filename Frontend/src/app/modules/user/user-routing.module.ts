import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth/auth.guard';
import { TaskComponent } from 'src/app/task-manager/pages/task/task.component';

const routes: Routes = [{
  path : '',
  canActivate : [AuthGuard],
  component : TaskComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
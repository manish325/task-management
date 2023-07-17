import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth/auth.guard';

const routes: Routes = [
    {
        path : '',
        loadChildren : ()=>import('./../auth/auth.module').then(m=>m.AuthModule)
    },
    {
        path : 'user',
        loadChildren : ()=>import('./../user/user.module').then(m=>m.UserModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
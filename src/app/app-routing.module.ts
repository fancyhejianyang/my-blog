import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', loadChildren: './view/view.module#ViewModule' },
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

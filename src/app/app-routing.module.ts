import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from './sign-up-component/sign-up.component';
import {IndexComponent} from './index-component/index.component';
import {SignInComponent} from './sign-in/sign-in.component';

const routes: Routes = [
  {path: '', redirectTo: 'singin', pathMatch:'full'},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

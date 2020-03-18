import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/passwoord/request-reset/request-reset.component';
import { ResponseComponent } from './components/passwoord/response/response.component';






const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'sign up page' }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'signup page' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'profile page' }
  },
  {
    path: 'request-password',
    component: RequestResetComponent,
    data: { title: 'reset password page' }
  },

  {
    path: 'response-password',
    component: ResponseComponent,
    data: { title: 'reset password page' }
  },




  

  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

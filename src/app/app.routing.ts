import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AccountComponent } from './account/account.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { JoinComponent } from './join/join.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent, canActivate: [AuthGuardComponent]
  },
  {
    path: 'join',
    component: JoinComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: "mentors",
    component: UserComponent
  },
  {
    path: "mentees",
    component: UserComponent
  },
  {
    path: 'user/:id',
    component: UserDetailComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'edit-user',
    component: EditUserComponent
  },


  // otherwise redirect to home
  {
    path: '**',
    redirectTo: ''
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

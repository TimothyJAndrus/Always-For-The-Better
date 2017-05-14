import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AccountComponent } from './account/account.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

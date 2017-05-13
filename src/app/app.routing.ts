import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MentorComponent } from './mentor/mentor.component';
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
    path: 'mentor',
    component: MentorComponent
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

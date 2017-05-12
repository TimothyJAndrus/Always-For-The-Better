import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MentorComponent } from './mentor/mentor.component';

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
    path: 'mentor',
    component: MentorComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

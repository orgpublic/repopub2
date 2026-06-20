import { Routes } from '@angular/router';
import { User } from './components/user/user';
import { Admin } from './components/admin/admin';
import { DataBinding } from './components/data-binding/data-binding';

export const routes: Routes = [
  { path: 'admin', component: Admin },
  { path: 'user', component: User },
  { path: 'data-binding', component : DataBinding }
];

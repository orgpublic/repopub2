import { Routes } from '@angular/router';
import { User } from './components/user/user';
import { Admin } from './components/admin/admin';
import { DataBinding } from './components/data-binding/data-binding';
import { NgIf } from './components/ng-if/ng-if';
import { NgFor } from './components/ng-for/ng-for';

export const routes: Routes = [
  { path: 'admin', component: Admin },
  { path: 'user', component: User },
  { path: 'data-binding', component : DataBinding },
  { path: 'ng-if', component: NgIf },
  { path: 'ng-for', component : NgFor}
];

import { Routes } from '@angular/router';
import { User } from './components/user/user';
import { Admin } from './components/admin/admin';
import { DataBinding } from './components/data-binding/data-binding';
import { NgIf } from './components/ng-if/ng-if';
import { NgFor } from './components/ng-for/ng-for';
import { ControlFlow } from './components/control-flow/control-flow';

export const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', component: Admin },
  { path: 'user', component: User },
  { path: 'data-binding', component: DataBinding },
  { path: 'ng-if', component: NgIf },
  { path: 'ng-for', component: NgFor },
  { path: 'control-flow', component: ControlFlow },
];

import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { NgIf } from './components/ng-if/ng-if';
import { NgFor } from './components/ng-for/ng-for';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,User,Admin,NgIf,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular02');
}

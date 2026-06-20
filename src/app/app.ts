import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,User,Admin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular02');
}

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api-call',
  imports: [CommonModule],
  templateUrl: './api-call.html',
  styleUrl: './api-call.css',
})
export class ApiCall {
  userList: any[] = [];
  constructor(private http: HttpClient) {}

  getUsers() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe((result) => {
      this.userList = result;
    });
  }
}

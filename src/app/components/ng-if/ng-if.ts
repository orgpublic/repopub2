import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule],
  templateUrl: './ng-if.html',
  styleUrl: './ng-if.css',
})
export class NgIf {
  isVisible : boolean = true;
  show(){
    this.isVisible = true;
      }
  hide()
  {
    this.isVisible = false;
      }
}

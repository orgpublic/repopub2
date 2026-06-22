import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
 firstname: string = 'John';
 updatedname: string = 'Doe';
 handleInput(event: Event){
  const inputelement = event.target as HTMLInputElement;
  this.firstname = inputelement.value;
 }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  user = {
    name: '',
    email: '',
  };
  onSubmit(form: any) {
    console.log('Form submitted: with following data:', this.user);
    console.log('Form submitted:', form);
  }
}

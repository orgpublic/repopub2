import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  user: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onSubmit() {
    console.log('Form submitted with following data:', this.user.value);
  }
}

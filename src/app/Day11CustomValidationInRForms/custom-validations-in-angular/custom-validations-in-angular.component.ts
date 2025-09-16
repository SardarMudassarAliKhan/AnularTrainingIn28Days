import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { noSpaceValidator } from '../../custom-validators/noSpaceValidator';
import { uniqueUsernameValidator } from '../../custom-validators/uniqueUsernameValidator';
import { passwordMatchValidator } from '../../custom-validators/password-match.validator';

@Component({
  selector: 'app-custom-validations-in-angular',
  imports: [ReactiveFormsModule,NgIf,],
  templateUrl: './custom-validations-in-angular.component.html',
  styleUrl: './custom-validations-in-angular.component.css'
})
export class CustomValidationsInAngularComponent {

    registerForm: any;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['',
        [Validators.required, noSpaceValidator],
        [uniqueUsernameValidator]
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    }, { validators: passwordMatchValidator });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log("✅ Form Submitted", this.registerForm.value);
      alert('Registration Successful!');
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  get f() {
    return this.registerForm.controls;
  }
}

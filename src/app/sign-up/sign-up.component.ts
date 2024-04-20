import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup; // No need for ! as it will be initialized in the constructor

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {
    // Initialize signUpForm in the constructor
    this.signUpForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }

    this.usersService.signup(this.signUpForm.value).subscribe(
      response => {
        console.log('User signed up successfully:', response);
        // Reset form after successful signup
        this.signUpForm.reset();
      },
      error => {
        console.error('Error signing up:', error);
        // Handle error
      }
    );
  }
}

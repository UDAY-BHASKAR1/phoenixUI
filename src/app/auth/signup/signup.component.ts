import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
  MinLengthValidator,
  AbstractControl,
} from "@angular/forms";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private Builder: FormBuilder) {
    this.signupForm = this.Builder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      userName: ["", [Validators.required]],
      mobileNumber: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {}
  get signup() {
    return this.signupForm.controls;
  }
  onsignUp() {
    var data = this.signupForm.value;
    console.log(data);
  }
}

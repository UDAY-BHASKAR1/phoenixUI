import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth-service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}
  signIN() {
    console.log(this.loginForm.value);
    const data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.auth.signin(data).subscribe((res) => {
      let data = res;
      console.log(data, 'login');
    });
  }
}

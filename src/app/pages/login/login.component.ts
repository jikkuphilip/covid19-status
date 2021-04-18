import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  Loginform: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginSrv: LoginService
  ) {}

  ngOnInit(): void {
    this.Loginform = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.submitted = true;
    if (this.Loginform.valid) this.loginSrv.userLogin(this.Loginform.value);
  }

  ngOnDestroy() {
    this.Loginform.reset();
  }
}

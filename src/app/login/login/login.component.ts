import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from "../../service/login.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../../model/IUser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  loginForm: FormGroup;

  constructor(private router: Router,
              private loginService: LoginService,
              private formBuilder: FormBuilder,
              ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z0-9]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  onLogin() {
    const data: IUser = this.loginForm.value;
    this.loginService.doLogin(data).subscribe(
        (response) => {
          localStorage.setItem('token', response.Authorization);
          localStorage.setItem('isLoggedin', 'true');
          this.router.navigate(['dashboard']);
        },
        () => {
          console.log('login fail');
        });

  }
}

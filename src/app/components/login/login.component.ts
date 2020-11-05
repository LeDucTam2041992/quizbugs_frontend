import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EventEmitter} from "events";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {IUser} from "../../user";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: string;

  constructor(private formBuilder: FormBuilder,
              private userService: LoginService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z0-9]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit(): void {
    const data: IUser = this.loginForm.value;
    console.log(this.loginForm.value);
    this.userService.doLogin(data).subscribe(
      (response) => {
        console.log(response.Authorization);
        localStorage.setItem('token', response.Authorization);
        this.route.navigate(['home']);
      },
      () => {
        this.message = 'login fail'
      });
  }

}

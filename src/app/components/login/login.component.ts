import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {EventEmitter} from "events";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUserForm: FormGroup;




  constructor(private formBuilder: FormBuilder,
              private userService: LoginService,
              private route: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log("login");
  }
}

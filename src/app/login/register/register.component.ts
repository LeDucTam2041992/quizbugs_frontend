import { Component, OnInit } from '@angular/core';
import {IUser} from "../../model/IUser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../service/login.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MessageService} from "../../service/message.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide: boolean = true;
  registerForm: FormGroup;
  message: string;

  constructor(private formBuilder: FormBuilder,
              private userService: LoginService,
              private route: Router,
              private messageService: MessageService
              ) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z0-9]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {validator: this.checkIfMatchingPasswords('password', 'confirmPassword')})
  }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  onRegister(): void {
    const data: IUser = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password
    }
    this.userService.doRegister(data).subscribe(
        () => {
          this.messageService.openSnackBar('Creating Account success','Close')
          this.route.navigate(['login'])
        },
        () => {
          this.messageService.showError('Create user false')
        }
    )
  }
}

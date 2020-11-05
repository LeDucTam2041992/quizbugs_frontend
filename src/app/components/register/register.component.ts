import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validator, ValidatorFn,
  Validators
} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {IUser} from "../../user";
import {ErrorStateMatcher} from "@angular/material/core";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  message: string;

  constructor(private formBuilder: FormBuilder,
              private userService: LoginService,
              private route: Router) {
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

  onSubmit(): void {
    const data: IUser = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password
    }
    this.userService.doRegister(data).subscribe(
      () => {
        this.route.navigate(['login'])
      },
      () => {
        this.message = "username da ton tai"
      }
    )
  }

  //   this.data.username = this.registerForm.value.username;
  //   this.data.password = this.registerForm.value.password;
}

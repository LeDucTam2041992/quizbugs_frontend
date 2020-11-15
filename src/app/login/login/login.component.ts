import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from "../../service/login.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../../model/IUser";
import {MessageService} from "../../service/message.service";

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
                private messageService: MessageService
    ) {
    }

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
                this.messageService.openSnackBar('Login Success','OK')
                localStorage.setItem('token', response.Authorization);
                localStorage.setItem('isLoggedin', 'true');
                if (response.ROLE.includes("ROLE_ADMIN")) {
                    sessionStorage.setItem('isAdmin','true');
                    this.router.navigate(['admin'])
                }
                else
                    this.router.navigate(['dashboard']);
            },
            () => {
                this.messageService.showError('login fail')
            });

    }


}

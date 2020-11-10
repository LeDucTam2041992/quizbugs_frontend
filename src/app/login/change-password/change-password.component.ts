import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {IUser} from "../../model/IUser";

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
    hide: boolean = true;
    updateForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private userService: LoginService,
                private route: Router,
                public snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        this.updateForm = this.formBuilder.group({
            oldPassword: ['', [Validators.required, Validators.minLength(6)]],
            newPassword: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
        }, {validator: this.checkIfMatchingPasswords('newPassword', 'confirmPassword')})
    }

    onUpdate() {
        const data: any = {
            oldPassword: this.updateForm.value.oldPassword,
            newPassword: this.updateForm.value.newPassword
        }
        this.userService.doUpdate(data).subscribe(
            () => {
                this.openSnackBar('update user password success', 'login again');
                this.route.navigate(['login'])
                localStorage.removeItem('isLoggedin');
                localStorage.removeItem('token');
            },
            () => {
                this.openSnackBar('update user password false', 'try again');
                console.log("change password fail");
            }
        )

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

    openSnackBar(message: string, action: string) {
        let snackBarRef = this.snackBar.open(message, action, {
            duration: 2000
        });
        snackBarRef.onAction().subscribe(() => {
            console.log('The snack-bar action was triggered!');
        });
    }
}

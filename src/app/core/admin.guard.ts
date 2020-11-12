import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginComponent} from "../login/login/login.component";
import {AdminModule} from "../admin/admin.module";
import {LoginService} from "../service/login.service";

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(private router: Router) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (localStorage.getItem('isLoggedin') && localStorage.getItem('token')) {
            if(sessionStorage.getItem('isAdmin'))
                return true;
        }

        this.router.navigate(['/home']);
        return false;
    }
}

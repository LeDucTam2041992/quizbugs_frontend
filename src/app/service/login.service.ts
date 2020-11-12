import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {IUser} from "../model/IUser";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient,
              private router: Router) {
  }

  doLogin(userData: IUser): Observable<any> {
    return this.http.post<any>(environment.urlApi + 'login', userData);
  }

  doLogout(): void {
    this.http.get(environment.urlApi + 'users/logout').subscribe(
      ()=> {
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
    )
  }

  doRegister(userData: IUser): Observable<any> {
    return this.http.post<any>(environment.urlApi + 'users/register', userData);
  }

  doUpdate(userData: any): Observable<any> {
    return this.http.put(environment.urlApi + 'users/updatePassword' , userData)
  }
}

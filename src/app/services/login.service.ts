import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {IUser} from "../user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  doLogin(userData: IUser): Observable<any>{
    return this.http.post<any>(environment.urlApi + '/login', userData);
  }
}

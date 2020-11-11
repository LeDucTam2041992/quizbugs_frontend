import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserExam} from "../model/user-exam";
import {environment} from "../../environments/environment";
import {Exam} from "../model/exam";
import {IUser} from "../model/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getAllUser(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(environment.urlApi + 'users');
  }

  updateRoleAdminUser(id: number): Observable<IUser>{
    return this.httpClient.put<IUser>(environment.urlApi + `users/${id}`,id);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exam} from "../model/exam";
import {environment} from "../../environments/environment";
import {UserExam} from "../model/user-exam";

@Injectable({
  providedIn: 'root'
})
export class UserExamService {

  constructor(private httpClient: HttpClient) { }
  getAllExamOfUser(): Observable<UserExam[]> {
    return this.httpClient.get<UserExam[]>(environment.urlApi + 'userExams');
  }
  getAllDoneExam(): Observable<UserExam[]> {
    return this.httpClient.get<UserExam[]>(environment.urlApi + 'userExams/getAll');
  }
  createUserExam(userExam: UserExam): Observable<UserExam>{
    return this.httpClient.post<UserExam>(environment.urlApi + 'userExams', userExam);
  }

  getUserExamById(id: number): Observable<Exam>{
    return this.httpClient.get<Exam>(environment.urlApi + `userExams/${id}`);
  }

  updateUserExam(id: number, userExam: UserExam): Observable<Exam>{
    return this.httpClient.put<Exam>(environment.urlApi + `userExams/${id}`, userExam);
  }

}

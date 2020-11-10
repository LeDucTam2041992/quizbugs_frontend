import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Question} from "../model/question";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private httpClient: HttpClient) { }
  getAllExams(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(environment.urlApi + 'questions');
  }

  createQuestion(question: Question): Observable<Question>{
    return this.httpClient.post<Question>(environment.urlApi + 'questions/', question);
  }

  getQuestion(id: number): Observable<Question>{
    return this.httpClient.get<Question>(environment.urlApi + `questions/${id}`);
  }

  updateQuestion(id: number, question: Question): Observable<Question>{
    return this.httpClient.put<Question>(environment.urlApi + `questions/${id}`, question);
  }

  deleteQuestion(id: number): Observable<Question>{
    return this.httpClient.delete<Question>(environment.urlApi + `questions/${id}`);
  }

  getAllQuestionByCategory(id: number): Observable<Question[]>{
    return this.httpClient.get<Question[]>(environment.urlApi + `category/${id}/questions`);
  }
}

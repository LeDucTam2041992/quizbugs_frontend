import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../model/question';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private httpClient: HttpClient) {
  }

  getAllQuestion(): Observable<Question[]> {
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
    return this.httpClient.delete<Question>(environment.urlApi + `/questions/${id}`);
  }

  getAllQuestionByCategory(id: number): Observable<Question[]>{
    return this.httpClient.get<Question[]>(environment.urlApi + `/category/${id}/questions`);
  }
}

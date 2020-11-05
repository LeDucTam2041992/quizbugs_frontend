import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../question';
import {environment} from '../../environments/environment';

const API_URL = `${environment.API_URL}`;

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private httpClient: HttpClient) {
  }

  getAllQuestion(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(API_URL + '/questions');
  }

  createQuestion(question: Question): Observable<Question>{
    return this.httpClient.post<Question>(API_URL + '/questions/', question);
  }

  getQuestion(id: number): Observable<Question>{
    return this.httpClient.get<Question>(API_URL + `/questions/${id}`);
  }

  updateQuestion(id: number, question: Question): Observable<Question>{
    return this.httpClient.put<Question>(API_URL + `/questions/${id}`, question);
  }

  deleteQuestion(id: number): Observable<Question>{
    return this.httpClient.delete<Question>(API_URL + `/questions/${id}`);
  }

  getAllQuestionByCategory(id: number): Observable<Question[]>{
    return this.httpClient.get<Question[]>(API_URL + `/category/${id}/questions`);
  }
}

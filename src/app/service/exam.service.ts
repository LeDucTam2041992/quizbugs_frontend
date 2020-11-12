import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Question} from "../model/question";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Exam} from "../model/exam";

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private httpClient: HttpClient) { }
  getAllExams(): Observable<Exam[]> {
    return this.httpClient.get<Exam[]>(environment.urlApi + 'exams');
  }

  createExam(exam: Exam): Observable<Exam>{
    return this.httpClient.post<Exam>(environment.urlApi + 'exams/', exam);
  }

  getExamById(id: number): Observable<Exam>{
    return this.httpClient.get<Exam>(environment.urlApi + `exams/${id}`);
  }

  updateExam(id: number, exam: Exam): Observable<Exam>{
    return this.httpClient.put<Exam>(environment.urlApi + `exams/${id}`, exam);
  }

  deleteExam(id: number): Observable<Exam>{
    return this.httpClient.delete<Exam>(environment.urlApi + `exams/${id}`);
  }
}

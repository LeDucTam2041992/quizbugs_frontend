import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getAllCategories(): Observable<any> {
    return this.http.get(environment.urlApi+'questions/categories');
  }
  findById(id): Observable<any> {
    return this.http.get(environment.urlApi + 'questions/categories'+id);
  }
  update(data,id):Observable<any> {
    return this.http.put(environment.urlApi+'questions/categories'+id,data);
  }
  delete(id): Observable<any> {
    return this.http.delete(environment.urlApi+'questions/categories'+id);
  }
}

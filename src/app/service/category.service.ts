import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ICategory} from "../model/ICategory";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getAllCategories(): Observable<any> {
    return this.http.get(environment.urlApi+'categories');
  }
  findById(id): Observable<any> {
    return this.http.get(environment.urlApi + 'categories/'+id);
  }
  createCategory(category: ICategory): Observable<any> {
    return this.http.post(environment.urlApi+'categories', category);
  }
  update(id,data):Observable<any> {
    return this.http.put(environment.urlApi+'categories/'+id,data);
  }
  delete(id): Observable<any> {
    return this.http.delete(environment.urlApi+'categories/'+id);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseUrl = '//localhost:8080/embl/sb/rest/persons';

  constructor(private http: HttpClient) { }

  getPerson(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPerson(person: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, person);
  }

  updatePerson(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPersonsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

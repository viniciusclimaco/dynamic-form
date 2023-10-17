import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getFormFields(): Observable<any> {
    return this.http.get('/assets/form.json'); // Ajuste o caminho conforme necessário
  }
}

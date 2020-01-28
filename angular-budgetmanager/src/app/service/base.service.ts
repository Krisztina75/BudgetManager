import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  baseUrl = 'http://localhost:3000/api';
  entity: string;

  constructor(protected http: HttpClient) { }

  getUrl(): any {
    let url = `${this.baseUrl}${this.entity}`;
    return url;
  }

  getAll(): Observable<any> {
    let url: string = this.getUrl();
    return this.http.get(url);
  }
}

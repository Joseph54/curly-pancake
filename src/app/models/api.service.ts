import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient/*,private http: HttpHeaders*/) { }

  getDadJoke(): Observable<any> {
    return this.http.get('https://icanhazdadjoke.com/');
  }
}

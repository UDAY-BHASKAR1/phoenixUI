import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseURL: string = environment.BASE_URL;
  headers = new HttpHeaders();
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  signup(data: any) {
    const url = this.baseURL + 'signUp';
    return this.http.post(url, data);
  }
  signin(data: any) {
    const url = this.baseURL + 'login';
    return this.http.post(url, data);
  }
}

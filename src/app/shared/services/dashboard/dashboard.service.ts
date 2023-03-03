import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  baseURL: string = environment.BASE_URL;
  headers = new HttpHeaders();
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  post(data: any) {
    const url = this.baseURL + 'post';
    return this.http.post(url, data);
  }
}

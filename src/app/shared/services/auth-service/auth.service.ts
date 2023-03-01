import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  baseURL: string = environment.BASE_URL;
  headers = new HttpHeaders();
  errorEmitter = new EventEmitter<boolean>();
  constructor(private http: HttpClient, private route: Router) {}
  ngOnInit(): void {}
  signup(data: any) {
    const url = this.baseURL + "auth/signup";
    return this.http.post(url, data);
  }
}

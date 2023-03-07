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
  // Post
  post(data: any) {
    const url = this.baseURL + 'user/post';
    return this.http.post(url, data);
  }

  // Friends list
  // all friends
  allUsers() {
    const url = this.baseURL + 'allUsers';
    return this.http.get(url);
  }

  // Home & Profile
  //  Like post
  likePost(data: any) {
    const url = this.baseURL + 'reaction/like';
    return this.http.post(url, data);
  }
  //dislike Post
  dislikePost(data: any) {
    const url = this.baseURL + 'reaction/dislike';
    return this.http.post(url, data);
  }

  // for Comment
  comment(data: any) {
    const url = this.baseURL + 'comment/save';
    return this.http.post(url, data);
  }
  // comment delete
  commentDelete(data: any) {
    const url = this.baseURL + 'comment/delete';
    return this.http.post(url, data);
  }
  //  comment for comment
  commentComment(data: any) {
    const url = this.baseURL + 'comment/comment';
    return this.http.post(url, data);
  }
  // following
  // add Friend
  addFriend(data: any) {
    const url = this.baseURL + 'request/addfriend';
    return this.http.post(url, data);
  }
  // un Friend
  unFriend(data: any) {
    const url = this.baseURL + 'request/unfriend';
    return this.http.post(url, data);
  }
}

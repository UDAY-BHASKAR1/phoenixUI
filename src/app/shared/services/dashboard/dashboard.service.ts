import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  // allposts
  followingPosts() {
    const url = this.baseURL + 'user/getAllFriendsPost';
    return this.http.get(url);
  }
  // userDetails
  userDetails() {
    const url = this.baseURL + 'profile';
    return this.http.get(url);
  }
  // Individual user posts
  userPosts() {
    const url = this.baseURL + 'user/allPosts';
    return this.http.get(url);
  }
  //  Like post
  likePost(postId: any) {
    let params = new HttpParams();
    params = params.set('postId', postId);
    const url = this.baseURL + 'user/toggleLike';
    return this.http.put(url, params);
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
    const url = this.baseURL + 'request/addFriend';
    return this.http.post(url, data);
  }

  // deletePost
  deletePost(postId: any) {
    let params = new HttpParams();
    params = params.set('postId', postId);
    const url = this.baseURL + 'user/post/delete';
    return this.http.delete(url, { params });
  }
}

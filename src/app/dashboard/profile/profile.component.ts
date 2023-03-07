import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  postsData: any[] = [];
  userData: any;
  constructor() {}

  ngOnInit(): void {
    this.postsData = [
      {
        firstName: 'Vamsi',
        lastName: 'Krishna',
        time: 'two weeks ago',
        userName: '',
        profilePc:
          'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        profilePic: null,
        contentText: 'vamsi working in progress...',
        contentImage: 'image.jpg',
        like: true,
        sharedPost: true,
        comments: [{ comment: 'this is nice' }, { comment: 'this is worst' }],
        likeCount: 5,
      },
      {
        firstName: 'Vamsi',
        lastName: 'Krishna',
        time: 'few minutes ago',
        userName: '',
        profilePic: null,
        contentText: 'uday working in progress...',
        contentImage: 'image.jpg',
        like: false,
        sharedPost: false,
        comments: [{ comment: 'this is nice' }],
        likeCount: 0,
      },
    ];
    this.userData = {
      userName: 'Vamsi001',
      profilePic: null,
      firstName: 'Vamsi',
      lastName: 'Krishna',
      email: 'vamsi@gmail.com',
      mobileNumber: 7421863242,
      followersCount: 11,
      followingCount: 20,
      postsCount: 15,
    };
  }
}

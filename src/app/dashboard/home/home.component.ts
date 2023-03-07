import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.data = [
      {
        firstName: 'vamsi',
        lastName: 'krishna',
        time: 'two weeks ago',
        userName: '',
        profilePic:
          'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        contentText: 'vamsi working in progress...',
        contentImage: 'image.jpg',
        like: true,
        sharedPost: true,
        comments: [{ comment: 'this is nice' }, { comment: 'this is worst' }],
        likeCount: 5,
      },
      {
        firstName: 'uday',
        lastName: 'babu',
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
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/shared/services/dashboard/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  constructor(private router: Router, private dashboard: DashboardService) {}

  ngOnInit(): void {
    this.dashboard.followingPosts().subscribe((res) => {
      console.log(res);
    });
    this.data = [
      {
        firstName: 'vamsi',
        lastName: 'krishna',
        time: 'two weeks ago',
        id: 2,
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
        id: 3,
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
  viewProfile() {
    // this.router.navigate(['/dashboard/profile']);
  }
  likePost(id: any, like: any) {
    var likeResponse = !like;
    console.log(id, likeResponse);
    let object = {
      postid: 2,
      likeRes: likeResponse,
    };
  }
}

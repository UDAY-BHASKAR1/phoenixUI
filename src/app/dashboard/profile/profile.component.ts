import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard/dashboard.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  postsData: any[] = [];
  userData: any;
  data: any;
  constructor(private dashboard: DashboardService) {}

  ngOnInit(): void {
    this.dashboard.userDetails().subscribe((res) => {
      this.userData = res;
    });
    this.dashboard.userPosts().subscribe((res: any) => {
      console.log(res.userData);
      this.postsData = res.userData;
    });
    // this.postsData = [
    //   {
    //     firstName: 'Vamsi',
    //     lastName: 'Krishna',
    //     time: 'two weeks ago',
    //     userName: '',
    //     profilePc:
    //       'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    //     profilePic: null,
    //     contentText: 'vamsi work in progress...',
    //     contentImage: 'image.jpg',
    //     like: true,
    //     id: 30,
    //     sharedPost: false,
    //     comments: [{ comment: 'this is nice' }, { comment: 'this is worst' }],
    //     likeCount: 5,
    //   },
    //   {
    //     firstName: 'Vamsi',
    //     lastName: 'Krishna',
    //     time: 'few minutes ago',
    //     userName: '',
    //     profilePic: null,
    //     id: 33,
    //     contentText: 'working in progress...',
    //     contentImage: 'image.jpg',
    //     like: false,
    //     sharedPost: false,
    //     comments: [{ comment: 'this is nice' }],
    //     likeCount: 0,
    //   },
    // ];
    // this.userData = {
    //   userName: 'Vamsi001',
    //   profilePic: null,
    //   firstName: 'Vamsi',
    //   lastName: 'Krishna',
    //   email: 'vamsi@gmail.com',
    //   mobileNumber: 7421863242,
    //   followersCount: 11,
    //   followingCount: 20,
    //   postsCount: 15,
    // };
  }
  likePost(id: number) {
    this.dashboard.likePost(id).subscribe((res: any) => {
      this.postsData = res;
      console.log(res);
    });
  }
  deletePost(id: any) {
    console.log(id);
    this.dashboard.deletePost(id).subscribe((res) => {
      console.log(res);
    });
  }
}

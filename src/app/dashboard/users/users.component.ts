import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard/dashboard.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  allUsersData: any[] = [];
  ButtonText: string = 'Follow';
  constructor(private dashboard: DashboardService) {}

  ngOnInit(): void {
    this.dashboard.allUsers().subscribe((res: any) => {
      console.log(res.response);
      this.allUsersData = res.response;
    });
  }

  addFriend(id: number) {
    let dataObject = {
      userId: id,
    };
    this.dashboard.addFriend(dataObject).subscribe((res) => {
      console.log(res);
      this.ButtonText = 'Unfollow';
    });
  }
}

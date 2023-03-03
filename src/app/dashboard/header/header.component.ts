import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard/dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  postContentModelAction: boolean = false;
  postContentText: any;
  postLoader: boolean = false;
  constructor(private dashboard: DashboardService) {}

  ngOnInit(): void {}
  postContentClick() {
    this.postContentModelAction = true;
  }
  contentCount() {}
  postContentModalClose() {
    this.postContentModelAction = false;
  }
  postContentPost() {
    let object = {
      post: this.postContentText,
    };
    this.dashboard.post(object).subscribe((res) => {
      console.log(res);
    });
  }
}

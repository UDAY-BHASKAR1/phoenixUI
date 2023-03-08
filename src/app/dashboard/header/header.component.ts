import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private dashboard: DashboardService, private router: Router) {}

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
      this.postContentModelAction = false;
      this.postContentText = '';
      window.location.reload();
    });
  }
  navigateHome() {
    this.router.navigate(['/dashboard']);
  }
  logout() {
    this.router.navigate(['/auth']);
    localStorage.clear();
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  postContentModelAction: boolean = false;
  postContentText: any;
  postLoader: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  postContentClick() {
    this.postContentModelAction = true;
  }
  contentCount() {}
  postContentModalClose() {
    this.postContentModelAction = false;
  }
  postContentPost() {}
}

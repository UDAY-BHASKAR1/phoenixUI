import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { ProfileComponent } from "./profile/profile.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "primeng/api";

import { PrimengModule } from "../shared/primeNG/primeng/primeng.module";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { UsersComponent } from './users/users.component';
@NgModule({
  declarations: [ProfileComponent, DashboardComponent, HeaderComponent, UsersComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}

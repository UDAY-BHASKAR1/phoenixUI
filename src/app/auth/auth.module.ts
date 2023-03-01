import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { SharedModule } from "../shared/shared.module";
import { PrimengModule } from "../shared/primeNG/primeng/primeng.module";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}

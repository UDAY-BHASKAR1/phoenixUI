import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { TooltipModule } from "primeng/tooltip";
import { InputNumberModule } from "primeng/inputnumber";
import { CardModule } from "primeng/card";
import { InputTextareaModule } from "primeng/inputtextarea";
import { DialogModule } from "primeng/dialog";
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CheckboxModule,
    InputTextareaModule,
    DialogModule,
    CardModule,
    TooltipModule,
    InputNumberModule,
  ],
})
export class PrimengModule {}

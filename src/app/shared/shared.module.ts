import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ButtonComponent } from "./components/button/button.component";
import { InputtextComponent } from "./components/inputtext/inputtext.component";
import { PrimengModule } from "./primeNG/primeng/primeng.module";
@NgModule({
  declarations: [ButtonComponent, InputtextComponent],
  imports: [CommonModule, PrimengModule],
  exports: [InputtextComponent],
})
export class SharedModule {}

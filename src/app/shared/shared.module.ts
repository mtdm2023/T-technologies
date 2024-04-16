import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratebuttonComponent } from './generatebutton/generatebutton.component';
import { GenerateTicketComponent } from './generate-ticket/generate-ticket.component';



@NgModule({
  declarations: [GeneratebuttonComponent,
  GenerateTicketComponent],
  imports: [
    CommonModule,

  ],
  exports:[GenerateTicketComponent, GeneratebuttonComponent],
})
export class SharedModule { }

import { PanelManagerComponent } from './panel-manager/panel-manager.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketcardComponent } from './ticketcard/ticketcard.component';
import { UsercardComponent } from './usercard/usercard.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import{InputSwitchModule} from 'primeng/inputswitch'
import { TooltipModule } from 'primeng/tooltip';
import { StatusCategoryComponent } from './status-category/status-category.component';
import { StatusComponentAvailable } from './status_available/status.component';
import { CategoryComponent } from './category/category.component';
import { KnobModule } from 'primeng/knob';
import { SideMainMenuComponent } from './side-main-menu/side-main-menu.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { UserHederCardComponent } from './user-heder-card/user-heder-card.component';






@NgModule({
  declarations: [
    TicketsComponent,
    TicketcardComponent,
    UsercardComponent,
    StatusComponentAvailable,
    CategoryComponent,
    PanelManagerComponent,
    SideMainMenuComponent,
    BreadcrumbComponent,
    HeaderSectionComponent,
    UserHederCardComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    FormsModule,
    InputSwitchModule,
    TooltipModule,
    BreadcrumbModule,
    KnobModule

  ],
  exports:
  [
    TicketcardComponent,
    UsercardComponent,
    TicketsComponent,
    StatusComponentAvailable,
     CategoryComponent,
     PanelManagerComponent,
     BreadcrumbModule,
     SideMainMenuComponent,
     BreadcrumbComponent,
     HeaderSectionComponent,
     KnobModule,
     UserHederCardComponent,
     CommonModule

  ]
})
export class TicketsSalesModule { }

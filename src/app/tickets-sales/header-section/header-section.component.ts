import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.css'
})
export class HeaderSectionComponent {

  @Input()Knab_value:number=450;
  @Input()Knab_description:string="من المنتجات";
}

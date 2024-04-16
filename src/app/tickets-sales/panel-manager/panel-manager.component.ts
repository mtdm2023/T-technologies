import { Component } from '@angular/core';

@Component({
  selector: 'app-panel-manager',
  templateUrl: './panel-manager.component.html',
  styleUrl: './panel-manager.component.css'
})
export class PanelManagerComponent {

  menueClicked:boolean=false;


  toggleMenue()
  {
    this.menueClicked = !this.menueClicked;
    console.log(this.menueClicked);
  }
}

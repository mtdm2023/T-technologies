import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-user-heder-card',

  templateUrl: './user-heder-card.component.html',
  styleUrl: './user-heder-card.component.css'
})
export class UserHederCardComponent {
  @Input() name: string = "111111";
  @Input() desc: string = "111111";
  @Input() imagesvg: string ='';

  ngOnInit(): void {
    console.log(this.imagesvg)
  }
  constructor(private sanitizer: DomSanitizer) {}

  get sanitizedSvgContent(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.imagesvg);
  }
}

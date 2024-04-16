import { SafePropertyRead } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeValue } from '@angular/platform-browser';

@Component({
  selector: 'app-generatebutton',
  templateUrl: './generatebutton.component.html',
  styleUrl: './generatebutton.component.css'
})
export class GeneratebuttonComponent {

  @Input() bHieght:string ="";
  @Input() bWidth :string ="";
  @Input() bBackgroundcolor:string ="";
  @Input() bBorderRedius:string ="";
  @Input() bimg:string="";
  @Input() bText:string="";
  @Input() bTextColor:string="";


  constructor(private sanitizer: DomSanitizer) {}

  get sanitizedSvgContent(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.bimg);
  }


}

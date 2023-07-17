import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  icons : string[] = [
    'archive',
    'edit'
  ]
  constructor(private matIconRegistry : MatIconRegistry, private domSanitizer : DomSanitizer) { }

  registerIcons() {
    this.icons.forEach((icon)=>{
      this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`));
    })
  }
}

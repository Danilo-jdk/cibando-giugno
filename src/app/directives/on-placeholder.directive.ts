import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appOnPlaceholder]'
})
export class OnPlaceholderDirective {
  @HostBinding('placeholder') avviso = 'Questo è un campo obbligatorio!';

  @HostListener('mouseover') mostraPlace(){
    this.avviso = '';
  }

  @HostListener('mouseout') nascondiPlace(){
    this.avviso = 'Questo è un campo obbligatorio!';
  }

  constructor() { }

}

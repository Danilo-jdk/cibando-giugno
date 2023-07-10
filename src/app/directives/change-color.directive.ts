import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
@HostBinding('style.background-color') background: string;
@HostBinding('style.color') color: string;

@HostListener('keydown') nuovoColore() {
  const coloreBack = Math.floor(Math.random() * this.coloriSfondo.length);
  const coloreTesto = Math.floor(Math.random() * this.coloriTesto.length);

  this.background = this.coloriSfondo[coloreBack];
  this.color = this.coloriTesto[coloreTesto];
}

coloriSfondo = ['red', 'darkred', 'orange'];
coloriTesto = ['white', 'black', 'grey'];

  constructor() { }

}

import { Component, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.scss']
})
export class FiglioComponent {
@Input() oggettoFiglio: string;
@Output() oggettoEmesso = new EventEmitter<string>();
@ViewChild('nuovoOggetto') nuovoOggetto: ElementRef;

  addNuovoOggetto(oggetto){
    console.log(oggetto)

    this.oggettoEmesso.emit(oggetto);
    this.nuovoOggetto.nativeElement.value = '';
  }

  removeOggetti(){
    this.oggettoEmesso.emit('elimina');
  }

}

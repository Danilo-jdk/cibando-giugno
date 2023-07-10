import { Component } from '@angular/core';
import { Observable, combineLatest, forkJoin, of } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-combine',
  templateUrl: './combine.component.html',
  styleUrls: ['./combine.component.scss']
})
export class CombineComponent {

  nomi1 = [{name: 'Danilo'}, {name: 'Matteo'}, {name: 'Claudio'}];
  nomi2 = [{name: 'Sid'}, {name: 'Antonio'}];

  private primoGruppo$: Observable<any[]>;
  private secondoGruppo$: Observable<any[]>;
  private terzoGruppo$: Observable<any[]>;

  gruppiCombinati$: Observable<any[]>;

  gruppi: any[] = [];


  constructor(){
    this.primoGruppo$ = of(this.nomi1).pipe(
      delay(0),
      tap((val) => console.log('emesso il primo gruppo: ', val))
    );

    this.secondoGruppo$ = of(this.nomi2).pipe(
      delay(4000),
      tap((val) => console.log('emesso il secono gruppo: ', val))
    );

    this.terzoGruppo$ = of(['Carlo', 'Alessia']).pipe(
      delay(1500),
      tap((val) => console.log('emesso il terzo gruppo: ', val))
    )

    // this.gruppiCombinati$ = combineLatest(this.primoGruppo$, this.secondoGruppo$, this.terzoGruppo$).pipe(
    //   map(([primaChiamata, secondaChiamata, terzaChiamata]) => {
    //     console.log('prima chiamata: ' + JSON.stringify(primaChiamata));
    //     console.log('seconda chiamata: ' + JSON.stringify(secondaChiamata));
    //     console.log('terza chiamata: ' + JSON.stringify(terzaChiamata));

    //     return [].concat(primaChiamata).concat(secondaChiamata).concat(terzaChiamata);
    //   }),
    //    tap((val) => console.log('tutte le chiamate unite: ', val))
    // )

    // this.gruppiCombinati$ = combineLatest(this.primoGruppo$, this.secondoGruppo$, this.terzoGruppo$).pipe(
    //   map((res) => {
    //     this.gruppi = res;
    //     return this.gruppi;
    //   }),
    //    tap((val) => console.log('tutte le chiamate unite: ', val))
    // )


    this.gruppiCombinati$ = forkJoin(this.primoGruppo$, this.secondoGruppo$, this.terzoGruppo$).pipe(
      map((res) =>
       this.gruppi = res
      ),
    )
  }


}

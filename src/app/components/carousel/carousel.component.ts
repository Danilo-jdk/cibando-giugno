import { Component, OnInit, Input } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/models/recipe.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() pag: string;
  percorso = '../assets/images/imageBg-';
  images = [
    { id: 1, label: 'Spaghetti al pomodoro' },
    { id: 2, label: 'Tagliata di manzo' },
    { id: 3, label: 'Tiramisù classico' },
  ];

 titoli: string[];

 ricette: Recipe[];

  constructor(private recipesService: RecipesService){
    console.log('avvio del costruttore')
  }

  ngOnInit(): void {
    console.log('componente avviato');
    if(this.pag == 'ricette'){
      this.onGetRecipes();
    }

  }

  onGetRecipes(){
    this.recipesService.getRecipes().pipe(
      map((res) =>res.map((ricetta) => ricetta.title)),
    ).subscribe({
      next: (titoli) => {
        this.titoli = titoli;
      },
      error: (e) => {
        console.log(e)
      }
    })

    // this.recipesService.getRecipes().subscribe({
    //   next: (titoli) => {
    //     this.ricette = titoli;
    //   },
    //   error: (e) => {
    //     console.log(e)
    //   }
    // })
  }
}

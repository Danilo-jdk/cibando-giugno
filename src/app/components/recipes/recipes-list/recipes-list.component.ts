import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { take, first, Observable, map } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  // ricette: Recipe[];

  // ricette$ = this.recipesService.getRecipesAsync().pipe(
  //   map( ricette => ricette.filter(ricetteFiltrate => ricetteFiltrate.difficulty < 1)),
  // );

  messaggio: string;

  constructor(private recipesService: RecipesService){}

  ngOnInit(): void {
      // this.onGetRecipes();
  }

  // onGetRecipes(){
  //   this.recipesService.getRecipes().pipe(first()).subscribe({
  //     next: (res) => {
  //       this.ricette = res.reverse();
  //     },
  //     error: (e) => {
  //       console.log(e)
  //     }
  //   })
  // }

  riceviTitolo(e: string){
    this.messaggio = this.messaggio === e ? this.messaggio = '' : this.messaggio = e;
  }

}

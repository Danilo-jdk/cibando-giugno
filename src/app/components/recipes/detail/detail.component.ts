import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  ricetta: Recipe;
  percorso = '../../../../assets/images/difficolta-';

  constructor(
    private recipeService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){}

    ngOnInit(): void {
      this.onGetRecipe();
    }

    onGetRecipe(): void {
      const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));
      this.recipeService.getRecipe(id).subscribe({
        next: (res) => {
          this.ricetta = res;
        },
        error: (e) => console.log(e)
      })
    }

    onGetRecipe2(): void {
      this.activatedRoute.params.subscribe((urlParams) => {
        const id = urlParams['_id'];
        const idNumb = Number(id);

        this.recipeService.getRecipe(idNumb).subscribe(
          res => this.ricetta = res
        );
      })
    }

}

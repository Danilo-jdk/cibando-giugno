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

  pag;

  constructor(
    private recipeService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){}

    ngOnInit(): void {
      this.onGetRecipe2();
    }

    onGetRecipe(): void {
      // const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));
      const id = this.activatedRoute.snapshot.paramMap.get('_id');
      const pag = this.activatedRoute.snapshot.paramMap.get('page');

      if(pag){
        this.pag = pag;
      }

      this.recipeService.getRecipe(id).subscribe({
        next: (res) => {
          this.ricetta = res;
        },
        error: (e) => console.log(e)
      })
    }

    onGetRecipe2(): void {

      this.activatedRoute.parent.params.subscribe((par) => {
        const pagina = par['pag'];
        if(pagina){
          this.pag = pagina;
        }
      })

      this.activatedRoute.params.subscribe((urlParams) => {
        const id = urlParams['_id'];
        const idNumb = Number(id);

        this.recipeService.getRecipe(id).subscribe(
          res => this.ricetta = res
        );
      })
    }

    tornaIndietro(){
      this.router.navigateByUrl('/ricette/' + this.pag)
    }

}

import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { UserService } from 'src/app/services/user.service';
import { take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit{
  @Input() pagina;
 @Output() messaggio = new EventEmitter();
 page = 1;
 ricettePerPagina = 4;
  first;

ruolo: any;
recupera_ruolo = this.userService.ruoloUtente.subscribe(res => this.ruolo = res);

constructor(
  private activatedRoute: ActivatedRoute,
  private router: Router,
  private recipesService: RecipesService,
  private userService: UserService){}

recipes$ = this.recipesService.getRecipesAsync();

ngOnInit(): void {
  this.onGetPage();
}


onGetPage(): void {
  const page = Number(this.activatedRoute.snapshot.paramMap.get('pag'));

  if(page !== 1){
    this.first =  (page -1) * this.ricettePerPagina;
    this.page = page;
  } else {
    this.first =  (this.page-1) * this.ricettePerPagina;
  }

}

 accorciaTesto(descrizione): number {
  let lunghezzaMassima = 180;
  if(descrizione.length <= lunghezzaMassima){
    return lunghezzaMassima;
  } else {
    let ultimoSpazio = descrizione.lastIndexOf(' ', lunghezzaMassima);
    return ultimoSpazio;
  }
 }

 inviaTitolo(titolo: string) {
  this.messaggio.emit(titolo);
 }

 paginate(e){
  e.page = e.page + 1;
  this.page = e.page;
 }


 getSliceValue(pagina: boolean, page: number, ricettePerPagina: number): string {
  if (pagina) {
    return `${(page * ricettePerPagina) - ricettePerPagina}:${page * ricettePerPagina}`;
  } else {
    return `0:4`;
  }
}

}

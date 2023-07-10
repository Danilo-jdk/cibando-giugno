import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent{
 @Input() recipes: Recipe[];
 @Output() messaggio = new EventEmitter();
 page = 1;
 ricettePerPagina = 4;

ruolo: any;
recupera_ruolo = this.userService.ruoloUtente.subscribe(res => this.ruolo = res);

constructor(private recipesService: RecipesService, private userService: UserService){}

recipes$ = this.recipesService.getRecipesAsync();

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
}

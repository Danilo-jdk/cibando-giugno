import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RECIPES } from '../mocks/recipe.mock';
import { Observable, ReplaySubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class RecipesService {

  pagina = new ReplaySubject();

  apiBaseUrl = 'api/recipes';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    // return of (RECIPES);
    return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`)
  }

  getRecipesAsync() {
    return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`)
  }


  getRecipe(id: string): Observable<Recipe> {
    // const recipe = RECIPES.find(ricetta => ricetta._id === id);
    // return of (recipe);
    return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`)
  }

  newRecipe(form): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.apiBaseUrl}/`, form )
  }
}

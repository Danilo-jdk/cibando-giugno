import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/models/recipe.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent {
@ViewChild('modalRecipe') modale: ElementRef;
  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    difficulty: new FormControl(0),
    published: new FormControl(true),
  });

  Editor = ClassicEditor;
  editorConfig = {
    toolbar: {
        items: [
            'bold',
            'italic',
            'link',
            '|',
            'bulletedList',
            'numberedList',
            '|',
            'indent',
            'outdent',
            '|',
            'insertTable',
            'undo',
            'redo',
        ]
    },
    image: {
        toolbar: [
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
    height: 300,
};


  ricetta: Recipe;
  constructor(
    private recipeService: RecipesService,
    private modalService: NgbModal,
    private router: Router
    ){}

  onSubmit(){
    console.log(this.form.value);
    if(this.form.value){
      this.recipeService.newRecipe(this.form.value).subscribe({
        next: (res) => {
          console.log(res);
          this.ricetta = res;
          this.open(this.modale);
        },
        error: (e) => {
          console.log(e)
        }
      })
    }
  }


  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modale privacy', size: 'lg', centered: true} ).result
    .then((res) => {
      this.form.reset();
    })
    .catch((res) => {
      this.router.navigateByUrl('ricette');
    })
  }
}

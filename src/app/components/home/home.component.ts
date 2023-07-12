import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { first, take} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  @ViewChild('modalRegistration', {static: false}) modale: ElementRef;
  title = 'cibando-giugno';

  mod: any;

  nome: string;
  email: string;

  label = 'logo di cibando';

  colore = 'green';
  coloreScelto: string;

  evidenziato = false;

  ricette: Recipe[];

  oggettoCorrente = "testo dal padre";

  oggetti = [];

  constructor(
    private recipesService: RecipesService,
    private userService: UserService,
    private modalService: NgbModal){

  }

  ngOnInit(): void {
    this.onGetRecipes();

    this.userService.datiUtente.pipe(take(1)).subscribe((res: any) => {
      this.nome= res.name;
      this.email = res.email;

      this.open(this.modale);
     });

  }

  riceviOggetto(e: string) {
    console.log(e);
    this.oggetti.push(e);

    if(e === 'elimina'){
      this.oggetti = [];
    }
  }


  cambiaSwitch(){
    this.colore = this.coloreScelto;
  }

  onEvidenziazione(){
    this.evidenziato = !this.evidenziato;
  }

onGetRecipes(){
    this.recipesService.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res;
        // this.ricette = this.ricette.sort((a,b) => a._id - b._id).slice(0-4);
        this.ricette = this.ricette.slice(-4).reverse();
      },
      error: (e) => {
        console.log(e)
        localStorage.removeItem('nome');
      }
    })
  }

  // closeModal(){
  //   this.userService.datiUtente.next('');
  //   this.nome = '';
  //   this.email = '';
  // }


  open(content: any) {
    if(content){
      this.modalService.open(content, {ariaLabelledBy: 'modale privacy', size: 'xl', centered: true} ).result
      .then((res) => {
        console.log('azione da eseguire in caso positivo')
      })
      .catch((res) => {
        console.log('nessuna azione da eseguire');
        location.reload();
      })
    }
  }

}

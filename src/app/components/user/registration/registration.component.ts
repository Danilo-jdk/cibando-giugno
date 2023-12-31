import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  titolo = 'pasta al sugo';
  id = 24;

  form = new FormGroup({
    name: new FormControl('Mario', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('Admin1234@', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('Admin1234@', Validators.required),
    accetto: new FormControl(true, Validators.requiredTrue),
    note: new FormControl('')
  })

  toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
  ];
  constructor(
    private config: PrimeNGConfig,
     private router: Router,
     private userService: UserService,
     private modalService: NgbModal,
     ){}

  ngOnInit(): void {
      this.config.setTranslation({
        weak: 'povera',
        medium: 'media',
        strong: 'forte',
        accept: 'accetto',
        passwordPrompt: 'Scrivi una password'
      })
  }

  onSubmit(){
    console.log(this.form.value);
    const user = {
      name: this.form.value.name,
      email: this.form.value.email
    };

    this.userService.datiUtente.next(user);

    this.userService.insertUser(this.form.value).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl('home');
      },
      error: (e) => console.log(e)
    })
  }

  svuotaModulo(){
    this.form.patchValue({
      name: '',
      email: '',
      accetto: false,
    })
  }


  convalidaPassword(): boolean{
    let password = this.form.controls.password.value;
    let ripetiPassword = this.form.controls.ripetiPassword.value;

    if(password === ripetiPassword) {
      return true;
    } else {
      return false;
    }
    // return this.form.get('password').value === this.form.controls.ripetiPassword.value;
  }

  open(content: any, titolo?: string, id?: number) {
    let title = titolo;
    let idNum = id;

    this.modalService.open(content, {ariaLabelledBy: 'modale privacy', size: 'lg', centered: true} ).result
    .then((res) => {
      console.log('azione da eseguire in caso positivo, titolo: ' +  title + ' id: ' + idNum)
    })
    .catch((res) => {
      console.log('nessuna azione da eseguire')
    })
  }
}

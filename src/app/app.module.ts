import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { RecipesModule } from './components/recipes/recipes.module';
import { EditorModule } from 'primeng/editor';
import { MaterialCompModule } from 'src/material.module';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ChangeColorDirective } from './directives/change-color.directive';
import { OnPlaceholderDirective } from './directives/on-placeholder.directive';
import { CombineComponent } from './components/combine/combine.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { FiglioComponent } from './components/figlio/figlio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegistrationComponent,
    ChangeColorDirective,
    OnPlaceholderDirective,
    CombineComponent,
    LoginComponent,
    ProfileComponent,
    FiglioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    DividerModule,
    ToastModule,
    CKEditorModule,
    RecipesModule,
    EditorModule,
    MaterialCompModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { CombineComponent } from './components/combine/combine.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { loggedInGuard } from './logged-in.guard';
import { guardAdmin } from './guardAdmin.guard';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'registrazione', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'ricette/:pag', loadChildren: () => import('./components/recipes/recipes.module').then(modulo => modulo.RecipesModule)},
  { path: 'profile', component: ProfileComponent, canActivate: [loggedInGuard]},
  { path: 'combine', component: CombineComponent, canActivate: [loggedInGuard, guardAdmin]},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

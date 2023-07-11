// import { Injectable } from '@angular/core';
// import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { AuthService } from './app/services/auth.service';

// function authGuardFactory(tokenService: AuthService, router: Router): CanActivateFn {
//   return (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//     // const isLoggedIn = this.authService.isLogged();


//     // if(!isLoggedIn) {
//     //    this.router.navigate(['home'])
//     //   // router.createUrlTree(['/login'])
//     // }
//     return true;

//   };
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard {
//   constructor(private tokenService: AuthService, private router: Router) {}

//   canActivate = [authGuardFactory(this.tokenService, this.router)];
// }

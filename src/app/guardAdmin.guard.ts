import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const guardAdmin: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const ruolo = sessionStorage.getItem('userRole');

  if (ruolo === 'admin'){
    return true;
  } else {
    router.navigateByUrl('home');
    return false;
  }

};

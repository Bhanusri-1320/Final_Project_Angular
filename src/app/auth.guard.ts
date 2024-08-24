import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);

  const auth = localStorage.getItem('token');

  if (!auth || auth == 'undefined') {
    router.navigate(['/login']);
    return false;
  }

  return true;
};

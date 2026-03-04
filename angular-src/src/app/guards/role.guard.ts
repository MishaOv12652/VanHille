import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const requiredRoles: string[] = route.data['roles'] ?? [];
  if (!auth.loggedIn()) {
    router.navigate(['/login']);
    return false;
  }
  if (requiredRoles.length && !auth.hasRole(...requiredRoles)) {
    router.navigate(['/']);
    return false;
  }
  return true;
};

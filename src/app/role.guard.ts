import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const allowedRoles = route.data['allowedRoles']; // Roles allowed for the route
  const userRole =authService.decodeToken()?.scope;

  if (!userRole) {
    // User is not authenticated, redirect to login or another page
    router.navigate(['/login']);
    return false;
  }

  if (allowedRoles.includes(userRole)) {
    // User has an allowed role for this route
    return true;
  } else {
    // User does not have an allowed role, redirect to a forbidden page or show an error message
    router.navigate(['/forbidden']);
    return false;
  }
};

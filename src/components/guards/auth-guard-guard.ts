import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if(authService.estaLogado()){
    return true;
  } else {
    alert("Acesso negado! Faça login primeiro");
    router.navigate(['/login']);
    return false;
  }
};

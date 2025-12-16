import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  private router = inject(Router);
  private authService = inject(AuthService);

  irParaLista() {
    this.router.navigate(['/lista']);
  }

  logout() {
    this.authService.logout(); // remove o token e já redireciona
  }
}

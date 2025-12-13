
import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';





@Component({
  selector: 'app-login',
  imports: [ButtonModule ,FormsModule, RouterModule, CheckboxModule, InputTextModule, PasswordModule, RippleModule, ReactiveFormsModule, CommonModule, PanelModule, CardModule, MatButtonModule, MatInputModule, MatCardModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router)
   formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)])
   });

  entrar() {
    if(this.formLogin.valid){
      const email = this.formLogin.get('email')!.value!;
      const senha = this.formLogin.get('senha')!.value!;
      this.authService.login(email, senha).subscribe(sucesso => {
        if(sucesso){
          this.router.navigate(['/home'])
      }
      });

      
    } else {
      this.formLogin.markAllAsTouched();
    }

  }
}

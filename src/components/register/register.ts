import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterModule, ReactiveFormsModule, CommonModule, ButtonModule, CheckboxModule, InputTextModule, PasswordModule, PanelModule, CardModule ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private authService = inject(AuthService);
  private router = inject(Router);
    formRegister = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)])
    })

  cadastrar(){
    if(this.formRegister.valid) {
      this.authService.register(this.formRegister.value).subscribe({
        next: () => {
         alert('Conta criada com sucesso. Faça login!');
         this.router.navigate(['/login']); 
        },
        error: () => alert('Erro ao criar conta.')
      });
    }
  }
}

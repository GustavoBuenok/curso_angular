import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, ButtonModule, InputTextModule, CardModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {
  private authService = inject(AuthService);
  private router = inject(Router);

  successMessage = signal<string>('');
  errorMessage = signal<string>('');

  formRegister = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  cadastrar() {
    if (!this.formRegister.valid) {
      this.formRegister.markAllAsTouched();
      return;
    }

    this.successMessage.set('');
    this.errorMessage.set('');

    const email = this.formRegister.get('email')!.value!;
    const senha = this.formRegister.get('senha')!.value!;

    this.authService.checarEmail(email).subscribe({
      next: (existe) => {
        if (existe) {
          this.errorMessage.set('Email já cadastrado.');
        } else {
          this.authService.register({ email, senha }).subscribe({
            next: () => {
              this.successMessage.set('Usuário cadastrado com sucesso! Faça login.');
              this.formRegister.reset();
            },
            error: () => {
              this.errorMessage.set('Erro ao criar conta. Tente novamente.');
            }
          });
        }
      },
      error: () => {
        this.errorMessage.set('Erro ao verificar email.');
      }
    });
  }
}

import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

interface Atividade {
  nome: string;
  concluida: boolean;
}

@Component({
  selector: 'app-aula4',
  imports: [ MatListModule, MatButtonModule, MatFormField, MatLabel, MatInput, FormsModule, CommonModule],
  templateUrl: './aula4.html',
  styleUrl: './aula4.scss',
})
export class Aula4 {

  novaAtividade = "";
  listaAtividades: Atividade[] = [];

  // obter() Atividade[]: {
  //   const salvo = localStorage.getItem('listaAtividades');
  //   return salvo ? JSON.parse(salvo) : []
  // }


  adicionar() {
     const nova: Atividade = {
      nome: this.novaAtividade,
      concluida: false
     };

    this.listaAtividades.push(nova);

    localStorage.setItem('listaAtividades', JSON.stringify(this.listaAtividades));

    this.novaAtividade = "";
  }
}


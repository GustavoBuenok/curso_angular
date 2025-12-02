import { Component} from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button'
import { Pipe} from '@angular/core';
import { CurrencyPipe } from '@angular/common';

interface Produto {
  nome: string;
  preco: number;
  emEstoque: boolean;
}

@Component({
  selector: 'app-aula3',
  imports: [ NgFor, MatListModule, MatButtonModule, NgClass],
  templateUrl: './aula3.html',
  styleUrl: './aula3.scss',
})
export class Aula3 {
// exibirConteudo = true;
// produtos = ['Mouse', 'Teclado', 'Monitor', 'Notebook']
// dataAtual = "2022-09-27 18:00:00.000"
// preco = 1234.56


  produtos: Produto[] = [
    { nome: 'Mouse', preco: 80, emEstoque: true },
    { nome: 'Teclado', preco: 120, emEstoque: false },
    { nome: 'Monitor', preco: 899, emEstoque: true },
    { nome: 'Notebook', preco: 3500, emEstoque: true }
  ];

}

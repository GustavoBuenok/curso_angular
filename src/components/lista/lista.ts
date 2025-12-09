import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ListaService, Tarefa } from '../services/lista-service';
import { TableModule } from 'primeng/table';
import {MatTableModule} from '@angular/material';


@Component({
  selector: 'app-lista',
  imports: [FormsModule, CommonModule, ButtonModule, InputTextModule, TableModule, MatTableModule ],
  templateUrl: './lista.html',
  styleUrl: './lista.scss',
})
export class Lista implements OnInit{
  private service = inject(ListaService);
novoTitulo = '';
tarefas: Tarefa[] = [];
colunas = ['titulo', 'status', 'acoes'];

ngOnInit(): void {
  this.carregarTarefas()
}
  carregarTarefas() {
    this.service.listar().subscribe({
      next: (dados) => this.tarefas = dados,
      error: (erro) => console.error('Erro:', erro)
    });
  }

  salvar() {
    if (!this.novoTitulo) return;
    this.service.adicionar(this.novoTitulo).subscribe(() => {
      this.carregarTarefas();
      this.novoTitulo = '';

    });
  }
  deletar(id:string){
    this.service.remover(id).subscribe(() => 
      this.carregarTarefas())
  }
}
 
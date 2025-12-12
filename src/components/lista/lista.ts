import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ListaService, Tarefa } from '../../components/services/lista-service';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



@Component({
  selector: 'app-lista',
  imports: [FormsModule, CommonModule, MatTableModule, ButtonModule, InputTextModule, MatIconModule, MatFormFieldModule, MatSelectModule, NgFor],
  templateUrl: './lista.html',
  styleUrl: './lista.scss',
})
export class Lista implements OnInit{
  private service = inject(ListaService);
novoTitulo = '';
tarefas: Tarefa[] = [];
colunas = ['titulo', 'status', 'acoes'];
statusOptions = [
  { value: true, label: 'Concluída' },
  { value: false, label: 'Pendente' }
];


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
  deletar(id: string) {
  this.service.remover(id).subscribe(() => {
    this.carregarTarefas();
  });
}

salvarStatus(tarefa: Tarefa) {
  this.service.atualizar(tarefa).subscribe();
}



}
 
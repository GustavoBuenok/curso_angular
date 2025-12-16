import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { ListaService, Tarefa } from '../../components/services/lista-service';




@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './lista.html',
  styleUrl: './lista.scss',
})
export class Lista implements OnInit {
  private service = inject(ListaService);

  novoTitulo = '';
  tarefas: Tarefa[] = [];

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas() {
    this.service.listar().subscribe({
      next: (dados) => (this.tarefas = dados),
      error: (erro) => console.error('Erro:', erro),
    });
  }

  salvar() {
    if (!this.novoTitulo.trim()) return;

    this.service.adicionar(this.novoTitulo.trim()).subscribe(() => {
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

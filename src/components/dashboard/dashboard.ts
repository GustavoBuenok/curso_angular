import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {DragDropModule, CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ListaService, Tarefa } from '../services/lista-service';



@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, DragDropModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit{

  todo: Tarefa[] = [];
  done: Tarefa[] = [];

  private service = inject(ListaService);

  ngOnInit() {
    this.service.listar().subscribe(tarefas => {
      this.todo = tarefas.filter(t => !t.status);
      this.done = tarefas.filter(t => t.status);
    });
    
  }

  drop(event: CdkDragDrop<Tarefa[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      return;
    }

    const tarefa = event.previousContainer.data[event.previousIndex];
    const concluida = event.container.id === 'done';
  }

}

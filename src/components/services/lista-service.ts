import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Tarefa {
  id: string;
  titulo: string;
  data: string;
  status: boolean;
}


@Injectable({
  providedIn: 'root',
})
export class ListaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/tarefas';

  listar(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }

  adicionar(titulo: string): Observable<Tarefa> {
  const novaTarefa = {
    titulo,
    data: new Date().toISOString(),
    status: false
  };
  return this.http.post<Tarefa>(this.apiUrl, novaTarefa);
}


  remover(id: string): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}

atualizar(tarefa: Tarefa): Observable<Tarefa> {
  return this.http.put<Tarefa>(`${this.apiUrl}/${tarefa.id}`, tarefa);
}


}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aula2 } from '../components/aula2/aula2';
import { FormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Aula2],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('novo_projeto');
}

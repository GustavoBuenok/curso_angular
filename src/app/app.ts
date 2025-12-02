import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Aula2 } from '../components/aula2/aula2';
import { Aula3 } from '../components/aula3/aula3';
import { FormsModule} from '@angular/forms'
import { Aula4 } from '../components/aula4/aula4';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('novo_projeto');
}

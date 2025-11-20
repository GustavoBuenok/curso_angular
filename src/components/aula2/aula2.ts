import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'



@Component({
  selector: 'app-aula2',
  imports: [FormsModule,
            MatButtonModule,
            MatInputModule,
            MatCardModule
  ],
  templateUrl: './aula2.html',
  styleUrl: './aula2.scss',
})
export class Aula2 {
  titulo: string = 'Meu site'
  // urlImage = 'https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg'
  // nome: string = ''

  // mostrarAlerta(): void {
  //   alert('Você clicou no botão')
  // }
  numero: number = 0
  adicionar(): void {
    this.numero ++
  }
  decrementar(): void {
    if (this.numero > 0){
        this.numero --
    }
    
  }

}
 
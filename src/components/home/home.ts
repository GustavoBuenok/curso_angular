import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-home',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, RouterLink, MatMenuModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}

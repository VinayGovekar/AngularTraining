import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SpidermanComponent } from '../components/spiderman/spiderman.component';
import { IronmanComponent } from '../components/ironman/ironman.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SpidermanComponent,IronmanComponent,RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ServicesDemo';
}

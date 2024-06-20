import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReaderCompComponent } from '../components/reader-comp/reader-comp.component';
import { WriterCompComponent } from '../components/writer-comp/writer-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReaderCompComponent,WriterCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NgRxProject';
}

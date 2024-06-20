import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { loadData } from './store/people/people.actions';
import { State, Store, select } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { peopleSelector } from './store/people/people.selector';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ReaderComponent } from '../components/reader/reader.component';
import { WriterComponent } from '../components/writer/writer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe,JsonPipe,ReaderComponent,WriterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}

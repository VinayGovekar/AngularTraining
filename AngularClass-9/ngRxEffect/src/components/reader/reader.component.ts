import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { State, Store, select } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Person } from '../../app/models/Person.model';
import { peopleSelector } from '../../app/store/people/people.selector';
import { loadData } from '../../app/store/people/people.actions';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [],
  templateUrl: './reader.component.html',
  styleUrl: './reader.component.css'
})
export class ReaderComponent {
  people:Person[]=[]
  data$ = this.store.pipe(select(peopleSelector));
  data:any;
  constructor(private store: Store, private actions$: Actions) {}

  ngOnInit() {
    this.store.dispatch(loadData());
    this.data$.subscribe((data)=>this.people=data);
  }

}

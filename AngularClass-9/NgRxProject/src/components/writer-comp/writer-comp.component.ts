import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { add } from '../../app/store/cricketer/cricketer.actions';
import { Cricketer } from '../../app/models/Cricketer.model';

@Component({
  selector: 'app-writer-comp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './writer-comp.component.html',
  styleUrl: './writer-comp.component.css',
})
export class WriterCompComponent {
  cid: number = 0;
  cFName: string = '';
  cLName: string = '';
  cRole: string = '';

  constructor(private store: Store) {}

  addCricketer() {
    const cricketer: Cricketer = {
      id: this.cid,
      fname: this.cFName,
      lname: this.cLName,
      role: this.cRole,
    };
  }
}

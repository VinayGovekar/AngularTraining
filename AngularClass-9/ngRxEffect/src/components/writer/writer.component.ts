import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Person } from '../../app/models/Person.model';
import { Store } from '@ngrx/store';
import { addData } from '../../app/store/people/people.actions';
@Component({
  selector: 'app-writer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './writer.component.html',
  styleUrl: './writer.component.css'
})
export class WriterComponent {

  id:number=0;
  fname:string="";
  lname:string="";

  /**
   *
   */
  constructor(private store:Store) {
    
  }

  addPerson(){
    const person:Person ={
      id:this.id,
      fname:this.fname,
      lname:this.lname
    }

    this.store.dispatch(addData({person}));

  }
}

import { Component, OnInit } from '@angular/core';
import { Cricketer } from '../../app/models/Cricketer.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { cricketersSelector } from '../../app/store/cricketer/cricketer.selector';
import { clear, remove } from '../../app/store/cricketer/cricketer.actions';

@Component({
  selector: 'app-reader-comp',
  standalone: true,
  imports: [],
  templateUrl: './reader-comp.component.html',
  styleUrl: './reader-comp.component.css',
})
export class ReaderCompComponent implements OnInit {
  cricketers: Cricketer[] | undefined;
  cricketers$: Observable<Cricketer[]> | undefined;
  constructor(private store:Store) {
    
  }
  ngOnInit(): void {
    this.cricketers$=this.store.pipe(select(cricketersSelector));
    this.cricketers$?.subscribe((x) => {
      console.log(x);
      this.cricketers = x});
  }

  removeCrickter(cid:number){
    this.store.dispatch(remove({cid}));
  }

  clearList(){
    this.store.dispatch(clear());
  }
}

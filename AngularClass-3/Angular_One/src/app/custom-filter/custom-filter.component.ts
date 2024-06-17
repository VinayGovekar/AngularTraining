import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FilterPipePipe } from '../../pipes/filter-pipe.pipe';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-custom-filter',
  standalone: true,
  imports: [FormsModule,FilterPipePipe,JsonPipe],
  templateUrl: './custom-filter.component.html',
  styleUrl: './custom-filter.component.css',
})
export class CustomFilterComponent {
  isChecked:boolean=false;
  cricketers: any[] = [
    { fname: 'Sachin', lname: 'Tendulkar' },
    { fname: 'Rahul', lname: 'Dravid' },
  ];
}

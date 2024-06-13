import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs';
@Component({
  selector: 'app-object-functions',
  standalone: true,
  imports: [FormsModule, NgbModule],
  templateUrl: './object-functions.component.html',
  styleUrl: './object-functions.component.css'
})
export class ObjectFunctionsComponent {
  title: string = 'Angular_One';
  persons: string[] = ['A', 'B', 'C', 'Y', 'D', 'K', 'M'];

  filterText ="";
  lastName: string = '';
  role: string = '';
  firstName: string = '';
  cricketers: cricketer[] = [
    new cricketer('Sachin', 'Tendulkar', 'Batsman'),
    new cricketer('Jasprit', 'Bumrah', 'Bowler'),
    new cricketer('Virat', 'Kohli', 'Batsman'),
  ];

  baseCricketers =[...this.cricketers]
  inputText: string = '';
  removeName(index: number) {
    this.persons.splice(index, 1);
  }
  addName() {
    if (this.inputText != '') this.persons.push(this.inputText);
    else alert('Input field is empty');
    this.inputText = '';
  }

  sortArray() {
    this.persons.sort();
  }

  addCrickter(): void {
    if (this.firstName != '' && this.lastName != '' && this.role != '') {
      this.cricketers.push(
        new cricketer(this.firstName, this.lastName, this.role)
      );
      this.baseCricketers.push(
        new cricketer(this.firstName, this.lastName, this.role)
      );
      this.firstName = '';
      this.lastName = '';
      this.role = '';
    }    
  }
  
  removeCricketer(id:number):void{
    this.cricketers.splice(id,1)
    this.baseCricketers.splice(id,1)
  }

  onFilterChange():void{
    console.log(this.filterText)
    if(this.filterText==""){
      this.cricketers = this.baseCricketers
    }
    this.cricketers = this.cricketers.filter((x) => x.name.toLowerCase().includes(this.filterText.toLowerCase()));
    console.log(this.cricketers);
  }

  sortByFirstName():void{
    this.cricketers = this.cricketers.sort((a:cricketer,b:cricketer)=>{
      return a.name<b.name?1:a.name>b.name?-1:0
    })
  }
  sortByFirstNameRev():void{
    this.cricketers = this.cricketers.sort((a:cricketer,b:cricketer)=>{
      return a.name<b.name?-1:a.name>b.name?1:0
    })
  }
}

class cricketer {
  constructor(public name: string, public lname: string, public role: string) {}
}

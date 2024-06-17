import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form1',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './template-form1.component.html',
  styles: []
})
export class TemplateForm1Component {
  countryList:country[] = [
    new country("1", "Pakistan"),
    new country('2', 'UAE'),
    new country('3', 'USA')
  ];
  onSubmit(contactForm : any) {
    console.log(contactForm.value);
  }
}
 
export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
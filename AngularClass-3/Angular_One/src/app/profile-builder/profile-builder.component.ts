import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-builder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile-builder.component.html',
  styleUrl: './profile-builder.component.css'
})
export class ProfileBuilderComponent {
  firstName:string=""
  lastName:string=""
  address:string=""
  phoneNumber:string=""
checkboxText:string=""
  public skills = [
    { checked: false, description: "HTML" },
    { checked: false, description: "CSS" },
    { checked: false, description: "Javascript" }
];



}

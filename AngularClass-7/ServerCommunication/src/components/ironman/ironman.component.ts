import { Component } from '@angular/core';
import { MissionService } from '../../services/mission.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ironman',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ironman.component.html',
  styleUrl: './ironman.component.css',
})
export class IronmanComponent {
  cricketerName: string = '';
  cricketerLName: string = '';
  cricketerRole: string = '';
  constructor(private missionService: MissionService) {}

  addCricketer() {
    this.missionService.addCricketer({
      id:"12",
      fname: this.cricketerName,
      lname: this.cricketerLName,
      role: this.cricketerRole,
    }).subscribe((data:any)=>{
     
    });
  }
}

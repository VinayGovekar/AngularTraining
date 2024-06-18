import { Component } from '@angular/core';
import { MissionService } from '../../services/mission.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ironman',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ironman.component.html',
  styleUrl: './ironman.component.css'
})
export class IronmanComponent {

  missionText:string=""
  constructor(private missionService:MissionService){

  }

  addMission(){
    this.missionService.addMission(this.missionText)
    this.missionText=""
  }
}

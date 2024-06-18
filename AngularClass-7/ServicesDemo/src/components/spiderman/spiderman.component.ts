import { Component, OnInit } from '@angular/core';
import { MissionService } from '../../services/mission.service';

@Component({
  selector: 'app-spiderman',
  standalone: true,
  imports: [],
  templateUrl: './spiderman.component.html',
  styleUrl: './spiderman.component.css',
})
export class SpidermanComponent implements OnInit {
  missions:string[] |undefined
  constructor(private missionService: MissionService) {}

  ngOnInit(): void {
    this.missionService.missionsObservable.subscribe((data)=>{
      this.missions=data;
    });
  }

  removeMission(index:number){
    this.missionService.removeMission(index);
  }

  moveUp(index:number){
    this.missionService.moveUp(index);
  }
}

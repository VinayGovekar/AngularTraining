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
  cricketers:any |undefined
  constructor(private missionService: MissionService) {}

  ngOnInit(): void {
    this.missionService.getCricketers().subscribe((data:any)=>{
      this.cricketers=data;
    });
    this.missionService.addCricketer(null).subscribe((data:any)=>{

    })
  }

  removeCricketer(id:string){
    this.missionService.removeCricketer(id).subscribe((data:any)=>{
      this.missionService.getCricketers().subscribe((data:any)=>{
        this.cricketers=data;
      });
    });
  }

  moveUp(index:number){
    // this.missionService.moveUp(index);
  }
}

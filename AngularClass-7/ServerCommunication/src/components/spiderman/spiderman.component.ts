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


  getData():void{
    this.missionService.getCricketers().subscribe((data:any)=>{
      this.cricketers=data;
    });
  }
  ngOnInit(): void {
    
    this.getData()
    console.log("oninit");
    
    this.missionService.getDataChanged().subscribe((data:any)=>{
      console.log("onsub")
      this.getData();
    });
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

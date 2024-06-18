import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  private missionsSubject = new BehaviorSubject<string[]>([
    'Save Mumbai',
    'Kill Thanos',
  ]);
  missionsObservable = this.missionsSubject.asObservable();

  constructor() {}

  // getMissions(): string[] {
  //   return this.missionsSubject.value;
  // }
  addMission(mission: string): void {
    this.missionsSubject.next([...this.missionsSubject.value, mission]);
    // console.log(this.missionsSubject.value);
  }

  removeMission(index:number):void{
    let newMissions = [...this.missionsSubject.value];
    newMissions.splice(index,1)
    this.missionsSubject.next(newMissions)
  }

  moveUp(index:number):void{
    console.log(index)
    if(index!=0){
      let newMissions = [...this.missionsSubject.value];
      newMissions.splice(index-1,0,newMissions[index])
      newMissions.splice(index+1,1)
      this.missionsSubject.next(newMissions)
      console.log(newMissions);
    }
    
  }
}

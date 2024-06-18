import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MissionService{
  baseURL: string = 'http://localhost:3000/cricketers';

  cricketers:any=[]
  additionHappend = new BehaviorSubject<any>(this.cricketers)
  constructor(private cricketerClient: HttpClient) {}
 
  getCricketers(): any {
    return this.cricketerClient.get(this.baseURL);
  }

  removeCricketer(id:string):any{
    return this.cricketerClient.delete(this.baseURL+"/"+id)
  }

  addCricketer(cricketer:any){
    this.additionHappend.next(cricketer)
    return this.cricketerClient.post(this.baseURL,cricketer)
  }
}

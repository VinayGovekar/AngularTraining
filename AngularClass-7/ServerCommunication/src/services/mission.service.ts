import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  baseURL: string = 'http://localhost:3000/cricketers';

  cricketers:any=[]

  cricketerUpdated = new Subject<any>();
  constructor(private cricketerClient: HttpClient) {}
  getCricketers(): any {
    return this.cricketerClient.get(this.baseURL);
  }

  removeCricketer(id:string):any{
    return this.cricketerClient.delete(this.baseURL+"/"+id)
  }

  getDataChanged():any{
    return this.cricketerUpdated.asObservable();
  }
  addCricketer(cricketer:any){
    console.log("in add service");
    
    // this.cricketerClient.post(this.baseURL,cricketer).subscribe(()=>this.cricketerUpdated.next(""));
    return this.cricketerClient.post(this.baseURL,cricketer).pipe(
      map(x=>this.cricketerUpdated.next(x))
    )
    
  }
}

import { Cricketer } from "../models/Cricketer.model";
import { Person } from "../models/Person.model";
import { Task } from "../models/Task.model";

export interface AppState{
    persons:Person[];
    tasks:Task[];
    cricketers:Cricketer[];
}

export const initialState:AppState={
    persons:[],
    tasks:[],
    cricketers:[
        {id:1,fname:"Virat",lname:"Kohli",role:"Batsman"},
        {id:2,fname:"Zaheer",lname:"Khan",role:"Bowler"}
    ]
};
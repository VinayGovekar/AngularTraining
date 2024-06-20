import { createAction, props } from "@ngrx/store";
import { Task } from "../../models/Task.model";

export const add = createAction('[Task] Add',props<{task:Task}>());

export const remove = createAction('[Task] Remove',props<{tid:number}>());

export const clear = createAction('[Task] Clear');
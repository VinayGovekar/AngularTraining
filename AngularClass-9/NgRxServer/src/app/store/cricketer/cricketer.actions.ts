import { createAction, props } from "@ngrx/store";
import { Cricketer } from "../../models/Cricketer.model";

export const add = createAction('[Cricketer] Add',props<{cricketer:Cricketer}>());

export const remove = createAction('[Cricketer] Remove',props<{cid:number}>());

export const clear = createAction('[Cricketer] Clear')

export const updateRole = createAction('[Cricketer] updateRole',props<{cid:number,role:string}>())
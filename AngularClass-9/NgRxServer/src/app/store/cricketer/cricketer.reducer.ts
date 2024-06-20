import { createReducer, on } from '@ngrx/store';
import { AppState, initialState } from '../app.state';
import { add, clear, remove, updateRole } from './cricketer.actions';
import { state } from '@angular/animations';
import { Cricketer } from '../../models/Cricketer.model';

export const cricketerReducer = createReducer(
  initialState,
  on(add, (state: AppState, { cricketer }: any) => {
    console.log('cricketer add reducer called', JSON.stringify(cricketer));
    return {
      ...state,
      cricketers: [...state.cricketers, cricketer],
    };
  }),
  on(remove, (state: AppState, { cid }: any) => ({
    ...state,
    cricketers: state.cricketers.filter((x) => x.id != cid),
  })),
  on(clear, (state: AppState) => ({ ...state, cricketers: [] })),
  on(updateRole, (state: AppState, { cid, role }: any) => ({
    ...state,
    cricketers: updateCrickterRole(state.cricketers, cid, role),
  }))
);

function updateCrickterRole(
  cricketers: Cricketer[],
  cid: number,
  role: string
) {
  cricketers.filter((x: Cricketer) => (x.id = cid)).map((x) => (x.role = role));
  return [...cricketers];
}

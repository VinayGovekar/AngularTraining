import { createReducer, on } from '@ngrx/store';
import { AppState, initialState } from '../app.state';
import { add, clear, remove } from './task.actions';
import { state } from '@angular/animations';

export const taskReducer = createReducer(
  initialState,
  on(add, (state: AppState, { task }: any) => ({
    ...state,
    tasks: [...state.tasks, task],
  })),
  on(remove, (state: AppState, { tid }: any) => ({
    ...state,
    tasks: state.tasks.filter((x) => x.taskId != tid),
  })),
  on(clear, (state: AppState) => ({ ...state, tasks: [] }))
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectCricketersState =
  createFeatureSelector<AppState>('cricketers');

export const cricketersSelector = createSelector(
  selectCricketersState,
  (state: AppState) => {
    console.log(state)
    return state.cricketers;
}
);

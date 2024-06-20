import { createReducer, on } from '@ngrx/store';
import { AppState } from '../app.state';
import { addData, loadData, loadDataFailure, loadDataSuccess } from './people.actions';

export const initialState: AppState = {
    people:[],
  };

  export const peopleReducer = createReducer(
    initialState,
    on(loadData, state => {
      console.log("Load data reducer here");
      return {
        ...state,
        loading: true
      };
    }),
    on(loadDataSuccess, (state, { payload}) => {
      console.log("Load data success reducer here",payload);
      return {
        ...state,
        loading: false,
        people: payload
      };
    }),
    on(loadDataFailure, (state, { payload }) => {
      console.log("Load data failure reducer here");
      return {
        ...state,
        loading: false,
        error: payload
      };
    }),
  on(addData,(state,{person})=>{
    console.log("Add data reducer");
    return{
      ...state
    }
  })
  );
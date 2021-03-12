import {
  ActionReducerMap,
} from '@ngrx/store';
import * as Users from './users';

export interface AppState {
  users: Users.State;
}

/* Not sure how to implement this 'MetaReducer'
// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<Users.State>[] = [debug]; */

export const userReducer = Users.reducer;
export const appReducers: ActionReducerMap<AppState, any> = {
  users: userReducer
};

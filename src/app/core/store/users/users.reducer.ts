import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './users.actions';

export interface State {
  name: string;
}

export const initialState: State = {
  name: ''
};

const userReducer = createReducer(
  initialState,
  on(UserActions.LoadUsersFromUsersList, (state, ) => ({ ...state})),
  on(UserActions.NameUserTestAction, (state, action) => ({ ...state, name: action.name})),
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}

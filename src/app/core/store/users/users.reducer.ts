import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './users.actions';

export interface State {
  home: number;
  away: number;
}

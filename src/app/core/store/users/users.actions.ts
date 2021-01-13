import { createAction, props } from '@ngrx/store';

export const loadUsersFromUsersList = createAction('[Users List] Load Users');
export const nameUserTestAction = createAction('[Users List] Test Action, set name', props<{name: string}>());


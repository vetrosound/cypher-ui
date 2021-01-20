import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const loadUsersFromUsersList = createAction('[Users List] Load Users');
export const successLoadUsersFromUsersList = createAction('[Users List] Successful Load Users', props<{users: User[]}>());
export const nameUserTestAction = createAction('[Users List] Test Action, set name', props<{name: string}>());


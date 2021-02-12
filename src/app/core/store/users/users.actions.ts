import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const LoadUsersFromUsersList = createAction('[Users List] Load Users');
export const LoadUsersFromUsersListFail = createAction('[Users List] Load Users Fail');
export const LoadUsersFromUsersListSuccess = createAction('[Users List] Load Users Successful', props<{users: User[]}>());
export const NameUserTestAction = createAction('[Users List] Test Action, set name', props<{name: string}>());


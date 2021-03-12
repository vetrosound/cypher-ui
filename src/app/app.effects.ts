import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoadUsersFromUsersList, LoadUsersFromUsersListFail, LoadUsersFromUsersListSuccess } from './core/store/users';
import { UsersListService } from './core/services/users-list.service';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private userService: UsersListService) { }

  // TODO Split effects into separate files
  loadUsersFromUsersList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadUsersFromUsersList),
      switchMap(() => this.userService.fetchUsersMock$()),
      map((res) => LoadUsersFromUsersListSuccess({ users: res })),
      catchError(() => of(LoadUsersFromUsersListFail()))
    )
  );
}

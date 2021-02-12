import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as mockData from './users-list.mock.json';
import { User } from '../../models/user';
import { Store } from '@ngrx/store';
import { State, LoadUsersFromUsersList } from '../store/users';

@Injectable({
  providedIn: 'root',
})
export class UsersListService {

  constructor(private http: HttpClient, private store: Store<State>) { }

  fetchUsers$(): Observable<User[]> {
    return this.http.get('www.wahterurl').pipe(map(() => []));
  }

  fetchUsersMock$(): Observable<User[]>{
    // TODO Why is this happening twice? Need to fix
    console.log('fetchUsersMock called');
    return of(mockData as User[]);
  }

  loadUsers() {
    this.store.dispatch(LoadUsersFromUsersList());
  }

}

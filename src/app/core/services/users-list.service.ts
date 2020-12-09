import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as mockData from './users-list.mock.json';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersListService {

  constructor(private http: HttpClient) { }
  getUsers() {
    this.fetchUsersMock$().subscribe();
  }

  fetchUsers$(): Observable<User[]> {
    return this.http.get('www.wahterurl').pipe(map(()=>[]));
  }

  fetchUsersMock$(): Observable<User[]>{
    return of(mockData as User[]);
  }

}

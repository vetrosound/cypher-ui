import { Component, OnInit } from '@angular/core';
import { UsersListService } from '../core/services/users-list.service';
import { User } from '../models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];
  constructor(private usersListService: UsersListService) { }

  ngOnInit(): void {
    this.users = [];
  }

}

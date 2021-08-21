import { Component, OnInit } from '@angular/core';
import { UserRequestApiService } from '../user-http/user-request-api.service';
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {
  user!: User;

  constructor(
    private userService: UserRequestApiService) { }

  ngOnInit(): void {
    this.userService.getRepositoryUser();
    this.user = this.userService.user;
  }
}

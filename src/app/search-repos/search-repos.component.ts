import { Component, OnInit } from '@angular/core';
import { UserRequestApiService } from '../user-http/user-request-api.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-search-repos',
  templateUrl: './search-repos.component.html',
  styleUrls: ['./search-repos.component.css'],
})

export class SearchReposComponent implements OnInit {

  repositories: Repository[] = [];

  constructor(private searchService: UserRequestApiService) { }

  ngOnInit(): void {
    this.searchService.getRepositories();
    this.repositories =this.searchService.repositories;
  }
}
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserRequestApiService } from '../user-http/user-request-api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchName: string;

  constructor(
    private userService: UserRequestApiService) { }
  submitSearch(form: NgForm) {
    var searchName = form.value.searchName;
    if (searchName !== '') {
      this.userService.setUsername(form.value.searchName);
      this.userService.getRepositories();
      this.userService.getRepositoryUser();

      this.resetFields(form);
    }

  }

  resetFields(form) {
    form.reset();
  }
  ngOnInit(): void { }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';
import { Repository } from '../repository';

@Injectable({ providedIn: 'root' })

export class UserRequestApiService {
  user: User; repositories:
    Repository[] = [];
  repoUsername: string = '';

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '', 0, 0, 0, '');
    this.setUsername();
    this.repositories = [];
  }

  setUsername(username: string = '') {

    this.repositories.splice(0,
      this.repositories.length);
    if (username == '') {
      this.repoUsername = "Garlinsk"
    } else {
      this.repoUsername = username;
    }
  }
  getRepositories() {
    interface ApiResponse {
      name: string; description: string; repositoryLink: string
    }
    let promise = new Promise((resolve, reject) => { this.http.get<ApiResponse>(`https://api.github.com/users/${this.repoUsername}/repos`).toPromise().then((response) => { Object.values(response).forEach((element) => { this.repositories.push(new Repository(element.name, element.description, element.html_url)); }); resolve('done'); }, (error) => { this.repositories = []; reject(error); }); }); return promise;
  }
  getRepositoryUser() {
    interface ApiResponse {
      login: string; avatar_url: string; bio: string; public_repos: number; followers: number; following: number;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/users/${this.repoUsername}`).toPromise().then((response) => {
        this.user.username = response.login; this.user.avatarUrl = response.avatar_url; this.user.bio = response.bio; this.user.publicRepos = response.public_repos; this.user.followers = response.followers; this.user.following = response.following;
        resolve('done');
      }, (error) => {
        reject(error);
      });
    });
    return promise;
  }
}

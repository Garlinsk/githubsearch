export class User {
    constructor(
        public username:string,
        public login:string,
        public avatarUrl:string,
        public bio:string,
        public publicRepos: number,
        public followers: number,
        public following: number,
        public html_url:string
    ){}
}
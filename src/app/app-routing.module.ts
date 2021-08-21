import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchReposComponent } from './search-repos/search-repos.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {path:"search",component:SearchComponent},
    {path:"search-repos",component:SearchReposComponent},
    {path:"",redirectTo:"/search",pathMatch:"full"},
    {path:'**',component:NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
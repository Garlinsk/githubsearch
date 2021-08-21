import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { UserRequestApiService } from './user-http/user-request-api.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { SearchReposComponent } from './search-repos/search-repos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BoldenPipe } from './bolden.pipe';
import { ChangecolorDirective } from './changecolor.directive';

const routes: Routes = [
  { path: "search", component: SearchComponent },
  { path: "search-repos", component: SearchReposComponent },
  { path: "", redirectTo: "/search", pathMatch: "full" },
  { path: '**', component: NotFoundComponent }];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    SearchReposComponent,
    NotFoundComponent,
    BoldenPipe,
    ChangecolorDirective],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    [RouterModule.forRoot(routes)],
  ],
  providers: [UserRequestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
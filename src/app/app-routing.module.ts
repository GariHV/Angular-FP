import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {UsersPageComponent} from "./pages/users-page/users-page.component";

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent
  },
  {
    path: "users",
    component: UsersPageComponent
  },
  {
    path: '**',
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

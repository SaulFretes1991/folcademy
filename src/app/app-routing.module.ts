import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/routes/home/home.component';
import { LoginComponent } from "./componentes/Login/login.component";
import { RegisterComponent } from "./componentes/Register/register.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  
  {
   path: 'home',
   redirectTo: 'home',
   pathMatch: "full"
  },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
];

@NgModule({
  imports:  [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { 
  
}
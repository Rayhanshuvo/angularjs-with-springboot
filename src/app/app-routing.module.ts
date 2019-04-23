import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';


// For welcome component need to create a route called welcome
const routes: Routes = [
  {path:'' , component:LoginComponent },
  {path:'todos' , component:ListTodosComponent },
{path:'login' , component:LoginComponent },
{path:'welcome/:name' , component:WelcomeComponent },
{path:'**' ,component:ErrorComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}

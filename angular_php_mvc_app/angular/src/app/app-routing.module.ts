import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './user/auth.guard.service';


const routes: Routes = [
      {path:'',component:UserComponent,children:[
      {path:'',redirectTo: "login", pathMatch: "full"},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'profile/:id',component:ProfileComponent,canActivate:[AuthGuard]}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

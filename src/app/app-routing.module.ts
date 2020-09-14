import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [

  { path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
  // { path: 'home', component: HomeComponent, },
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: '**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

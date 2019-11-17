import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PastTrialsComponent } from './past-trials/past-trials.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'past-trials',
    component: PastTrialsComponent,
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent,
  },
  {
    path: 'log-in',
    component:LoginComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

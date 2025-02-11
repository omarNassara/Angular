import { SettingModule } from './setting/setting.module';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  { path: 'home', canActivate:[AuthGuard] ,component: HomeComponent },
  { path: 'about', canActivate:[AuthGuard] , component: AboutComponent },
  { path: 'movies', canActivate:[AuthGuard] , component: MoviesComponent},
  { path: 'tv', canActivate:[AuthGuard] , component: TvComponent },
  { path: 'setting', canActivate:[AuthGuard] ,   loadChildren: () => import('./setting/setting.module').then((m) => m.SettingModule)},
  
  { path: 'people', canActivate:[AuthGuard] , component: PeopleComponent },
  { path: 'moviedetails/:id/:media_type', canActivate:[AuthGuard] , component: MoviedetailsComponent },



  { path: 'login',  component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { Routes } from '@angular/router';
import {LoginComponent} from "./users/pages/login/login.component";
import {RegisterComponent} from "./users/pages/register/register.component";
import {MoodComponent} from "./users/pages/mood/mood.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {EventContentComponent} from "./events/pages/event-content/event-content.component";
import {ExplorerContentComponent} from "./explorer/pages/explorer-content/explorer-content.component";
import {FavoritesComponent} from "./lists/pages/favorites/favorites.component";
import {SidebarNavigatorComponent} from "./public/components/sidebar-navigator/sidebar-navigator.component";
import {AuthLayoutComponent} from "./users/pages/auth-layout/auth-layout.component";
import {ProfileComponent} from "./public/pages/profile/profile.component";
import {ForumsComponent} from "./forums/pages/forum-list/forum-list.component";
import {RecentContentComponent} from "./explorer/pages/recent-content/recent-content.component";


export const routes: Routes = [

  /*
    {
      path: '',
      component: SidebarNavigatorComponent,
      children: [
        {path: 'home', component: HomeComponent},
        {path:'', redirectTo: 'home', pathMatch: 'full'},
        {path:'event', component: EventContentComponent},
        {path:'explorer', component: ExplorerContentComponent}
      ]
    },
    {
      path: '',
      component: AuthLayoutComponent,
      children: [
        {path: 'login', component: LoginComponent },
        {path : 'register', component: RegisterComponent}
      ]
    },
    */




  {path: 'home', component: HomeComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path : 'register', component: RegisterComponent},
  {path: 'mood', component: MoodComponent},
  {path:'event', component: EventContentComponent},
  {path:'explorer', component: ExplorerContentComponent},
  {path:'recentContent', component: RecentContentComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'forums', component: ForumsComponent},
  {path: 'lists', component: FavoritesComponent},
  { path: '**', redirectTo: '/home' }



];

import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {LoginComponent} from "./users/pages/login/login.component";
import {RegisterComponent} from "./users/pages/register/register.component";
import {MoodComponent} from "./users/pages/mood/mood.component";
import {EventContentComponent} from "./events/pages/event-content/event-content.component";
import {ExplorerContentComponent} from "./explorer/pages/explorer-content/explorer-content.component";

export const routes: Routes = [
  
  {path: 'home', component: HomeComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path : 'register', component: RegisterComponent},
  {path: 'mood', component: MoodComponent},
  {path:'event', component: EventContentComponent},
  {path:'explorer', component: ExplorerContentComponent},
  { path: '**', redirectTo: '/home' }

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
];

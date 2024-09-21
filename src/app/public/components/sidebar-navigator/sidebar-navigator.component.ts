import { Component } from '@angular/core';
import {MatDrawer, MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {RouterLink, RouterOutlet} from "@angular/router";



@Component({
  selector: 'app-sidebar-navigator',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatSidenav,
    MatNavList,
    MatListItem,
    MatIcon,
    MatButton,
    RouterLink,
    MatDrawer,
    RouterOutlet,
    MatSidenavContent

  ],
  templateUrl: './sidebar-navigator.component.html',
  styleUrl: './sidebar-navigator.component.css'
})
export class SidebarNavigatorComponent {

  /*
  options=[
    {path: 'home', title: 'Home'},
    {path: 'explorer', title: 'Explorer'},
    {path: 'event', title: 'Event'}
  ]

  routesWithoutSidebar: string[] = ['/login', '/register'];

  constructor(private router: Router) {}

  shouldShowSidebar(): boolean {
    return !this.routesWithoutSidebar.includes(this.router.url);
  }
    */

}

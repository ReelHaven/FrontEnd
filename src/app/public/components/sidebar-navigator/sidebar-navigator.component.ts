import { Component } from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatList, MatListItem, MatNavList} from "@angular/material/list";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";


@Component({
  selector: 'app-sidebar-navigator',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatSidenav,
    MatNavList,
    MatListItem,
    MatButton,
    MatIcon,
    MatList,
    MatSidenavContent,
    RouterLink,
    MatAnchor,
    RouterOutlet,
    NgOptimizedImage,
    NgIf,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ],
  templateUrl: './sidebar-navigator.component.html',
  styleUrl: './sidebar-navigator.component.css'
})
export class SidebarNavigatorComponent {


  options=[
    {path: 'home', title: 'Home'},
    {path: 'explorer', title: 'Explorer'},
    {path: 'event', title: 'Event'}
  ]



  routesWithoutSidebar: string[] = ['/login', '/register', '/mood'];

  constructor(private router: Router) {}

  shouldShowSidebar(): boolean {
    return !this.routesWithoutSidebar.includes(this.router.url);
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('moodValues');
    this.router.navigate(['/login']).then(r=>console.log("logged out"));
  }


}


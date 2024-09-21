import { Component } from '@angular/core';
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
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
    RouterOutlet
  ],
  templateUrl: './sidebar-navigator.component.html',
  styleUrl: './sidebar-navigator.component.css'
})
export class SidebarNavigatorComponent {

}

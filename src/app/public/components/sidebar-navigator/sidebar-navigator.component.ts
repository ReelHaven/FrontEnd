import { Component } from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatList, MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatAnchor, MatButton} from "@angular/material/button";
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
    RouterOutlet,
    MatAnchor,
    MatList,
    MatSidenavContent
  ],
  templateUrl: './sidebar-navigator.component.html',
  styleUrl: './sidebar-navigator.component.css'
})
export class SidebarNavigatorComponent {

}

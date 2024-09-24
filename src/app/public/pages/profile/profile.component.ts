import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatNavList,
    MatButton,
    MatListItem,
    MatIcon,
    MatDivider
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user: any;

  constructor() {
    this.user = localStorage.getItem('currentUser');

    if (this.user) {
      this.user = JSON.parse(this.user);
    }
  }

}

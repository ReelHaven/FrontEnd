import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidebarNavigatorComponent} from "./public/components/sidebar-navigator/sidebar-navigator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarNavigatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mindflix-frontend';
}

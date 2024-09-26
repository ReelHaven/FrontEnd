import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidebarNavigatorComponent} from "./public/components/sidebar-navigator/sidebar-navigator.component";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarNavigatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mindflix-frontend';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('es');
  }
}

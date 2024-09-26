import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {LanguageSwitcherComponent} from "../language-switcher/language-switcher.component";

@Component({
  selector: 'app-toolbar-login',
  standalone: true,
  imports: [
    MatToolbar,
    LanguageSwitcherComponent
  ],
  templateUrl: './toolbar-login.component.html',
  styleUrl: './toolbar-login.component.css'
})
export class ToolbarLoginComponent {

}

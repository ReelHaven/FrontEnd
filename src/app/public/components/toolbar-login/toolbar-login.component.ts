import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-toolbar-login',
  standalone: true,
  imports: [
    MatToolbar
  ],
  templateUrl: './toolbar-login.component.html',
  styleUrl: './toolbar-login.component.css'
})
export class ToolbarLoginComponent {

}

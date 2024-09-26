import {Component, Input} from '@angular/core';
import {Content} from "../../model/content.entity";
import {MatCard, MatCardContent, MatCardHeader, MatCardImage} from "@angular/material/card";
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-content-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFabButton,
    MatIcon,
    MatCardImage
  ],
  templateUrl: './content-item.component.html',
  styleUrl: './content-item.component.css'
})
export class ContentItemComponent {
  @Input() content!: Content;
}

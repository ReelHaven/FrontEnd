import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Content} from "../../model/content.entity";
import {MatCard, MatCardContent, MatCardHeader, MatCardImage} from "@angular/material/card";
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {ExplorerService} from "../../services/explorer.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-content-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFabButton,
    MatIcon,
    MatCardImage,
    NgIf
  ],
  templateUrl: './content-item.component.html',
  styleUrl: './content-item.component.css'
})
export class ContentItemComponent {
  @Input() content!: Content;
  @Output() contentToggled = new EventEmitter<void>();
  constructor(private contentService: ExplorerService) {}

  markAsSeen() {
    this.contentService.addContent(this.content);
    this.contentToggled.emit();
    // Opcionalmente, muestra un mensaje de confirmación
    console.log('Contenido marcado como visto:', this.content);
  }

  isContentSeen(): boolean {
    return this.contentService.getRecentContent().some(c => c.contentId === this.content.contentId);
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ContentItemComponent} from "../content-item/content-item.component";
import {Content} from "../../model/content.entity";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [ContentItemComponent, MatGridList, MatGridTile, NgForOf],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent {
  @Input() contents: Array<Content>=[];
  @Output() contentToggled = new EventEmitter<void>();
  onContentToggled() {
    this.contentToggled.emit();
  }
}

import { Component, Input } from '@angular/core';
import {Event} from "../../model/event.entity";
import {MatGridList} from "@angular/material/grid-list";
import {EventItemComponent} from "../event-item/event-item.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [
    MatGridList,
    EventItemComponent,
    NgForOf
  ],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  @Input() events: Array<Event>=[];
}

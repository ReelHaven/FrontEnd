import { Component, Input } from '@angular/core';
import {Event} from "../../model/event.entity";

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  @Input() events: Array<Event>=[];
}

import { Component, Input } from '@angular/core';
import {Event} from "../../../model/event.entity"

@Component({
  selector: 'app-event-item',
  standalone: true,
  imports: [],
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.css'
})
export class EventItemComponent {
  @Input() event!: Event;
}

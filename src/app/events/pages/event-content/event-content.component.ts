import { Component, OnInit } from '@angular/core';
import { Event } from "../../model/event.entity";
import { EventApiService } from "../../services/event-api.service";
import { EventListComponent } from "../../components/event-list/event-list.component";

@Component({
  selector: 'app-event-content',
  standalone: true,
  imports: [EventListComponent], // Importamos EventListComponent
  templateUrl: './event-content.component.html',
  styleUrls: ['./event-content.component.css']
})
export class EventContentComponent implements OnInit {

  public events: Array<Event> = [];         // Almacena la lista de eventos
  selectedEvent: Event | null = null;       // Almacena el evento seleccionado
  eventService: EventApiService;            // Inyección del servicio de eventos

  constructor(eventService: EventApiService) {
    this.eventService = eventService;        // Asignación del servicio
  }

  ngOnInit(): void {
    this.getAllEvents();                     // Obtiene la lista de eventos al inicializar
  }

  private getAllEvents(): void {
    this.eventService.getAll().subscribe((response: Array<Event>) => {
      this.events = response;                // Asigna la respuesta a la lista de eventos
      console.log(response);                 // Muestra la respuesta en consola
    });
  }

  // Method
  public onSelectEvent(event: Event): void {
    this.selectedEvent = event;              // Almacena el evento seleccionado
  }
}

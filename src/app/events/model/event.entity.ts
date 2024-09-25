
export class Event {
  eventId: number;
  contentId: number;
  title: string;
  description: string;
  date: string;
  address: string;
  creatorId: number;

  constructor(event:{eventId?: number, contentId?: number, title?: string, description?: string, date?: string, address?: string, creatorId?: number}) {
    this.eventId = event.eventId || 0;
    this.contentId = event.contentId || 0;
    this.title = event.title || '';
    this.description = event.description || '';
    this.date = event.date || '';
    this.address = event.address || '';
    this.creatorId = event.creatorId || 0;
  }
}

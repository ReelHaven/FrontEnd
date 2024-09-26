
export class Event {
  eventId: number;
  contentId: number;
  title: string;
  description: string;
  date: string;
  address: string;
  creatorId: number;
  image: string;

  constructor() {
    this.eventId = 0;
    this.contentId = 0;
    this.title = "";
    this.description = "";
    this.date = "";
    this.address = "";
    this.creatorId = 0;
    this.image = "";
  }
}

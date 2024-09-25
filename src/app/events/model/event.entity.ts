
export class Event {
  eventId: string;
  contentId: string;
  title: string;
  description: string;
  date: string;
  address: string;
  creatorId: string;

  constructor(
    eventId: string,
    contentId: string,
    title: string,
    description: string,
    date: string,
    address: string,
    creatorId: string
  ) {
    this.eventId = eventId;
    this.contentId = contentId;
    this.title = title;
    this.description = description;
    this.date = date;
    this.address = address;
    this.creatorId = creatorId;
  }
}

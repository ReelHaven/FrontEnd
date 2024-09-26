
export class Content {
  contentId: number;
  creatorId: number;
  type: string;
  title:string;
  description: string;
  category: string;
  objective:string;
  feeling:string;
  image: string;

  constructor() {
    this.contentId = 0;
    this.creatorId = 0;
    this.type = "";
    this.title = "";
    this.description = "";
    this.category = "";
    this.objective = "";
    this.feeling = "";
    this.image="";
  }
}

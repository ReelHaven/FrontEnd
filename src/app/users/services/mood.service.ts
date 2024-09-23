import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoodService extends BaseService<any>{


  constructor() {
    super();
    this.resourceEndpoint = '/content';
  }
  //get content from db.json
  getContent(){
    return this.http.get<any>(this.resourcePath());
  }

  //filter content based on mood values
  getFilteredContent(moodValues: any){
    return this.getContent().pipe(
      map((contents: any[]) => {
        const feelingMatches = contents.filter(content => content.feeling === moodValues.feeling);
        const objectiveMatches = contents.filter(content => content.objective === moodValues.objective);
        const categoryMatches = contents.filter(content => content.category === moodValues.category);

        return {feelingMatches, objectiveMatches, categoryMatches};
      })
    );
  }

}

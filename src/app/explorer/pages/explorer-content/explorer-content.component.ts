import {Component, inject, OnInit} from '@angular/core';
import {ContentListComponent} from "../../components/content-list/content-list.component";
import {Content} from "../../model/content.entity";
import {ExplorerService} from "../../services/explorer.service";
import {SearchContentComponent} from "../../components/search-content/search-content.component";

@Component({
  selector: 'app-explorer-content',
  standalone: true,
  imports: [
    ContentListComponent,
    SearchContentComponent
  ],
  templateUrl: './explorer-content.component.html',
  styleUrl: './explorer-content.component.css'
})
export class ExplorerContentComponent implements OnInit {

  public contents: Array<Content> = [];
  filteredContentList: Array<Content> = [];
  explorerService: ExplorerService = inject(ExplorerService);


  ngOnInit():void {
    this.getAllContents();
  }

  private getAllContents() {
    this.explorerService.getAll().subscribe((response: Array<Content>) => {
      this.contents = response;
      this.filteredContentList=response;
      console.log(response);
    })
  }

  public onFilter(filterData: { text: string; category: string; type: string }) {
    this.filteredContentList = this.contents.filter(content => {
      const matchesText = content.title.toLowerCase().startsWith(filterData.text.toLowerCase());
      const matchesCategory = filterData.category ? content.category === filterData.category : true;
      const matchesType = filterData.type ? content.type === filterData.type : true;
      return matchesText && matchesCategory && matchesType;
    });
  }

}


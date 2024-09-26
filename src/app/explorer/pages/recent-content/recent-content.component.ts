import {Component, OnInit} from '@angular/core';
import {Content} from "../../model/content.entity";
import {ExplorerService} from "../../services/explorer.service";
import {ContentListComponent} from "../../components/content-list/content-list.component";
import {SearchContentComponent} from "../../components/search-content/search-content.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-recent-content',
  standalone: true,
  imports: [
    ContentListComponent,
    SearchContentComponent,
    NgIf
  ],
  templateUrl: './recent-content.component.html',
  styleUrl: './recent-content.component.css'
})
export class RecentContentComponent implements OnInit {
  public recentContent: Array<Content> = [];
  public filteredRecentContentList: Array<Content> = [];
  private contentService: ExplorerService;

  constructor(contentService: ExplorerService) {
    this.contentService = contentService;
  }

  ngOnInit(): void {
    this.getRecentContents();
  }

  private getRecentContents() {
    this.recentContent = this.contentService.getRecentContent();
    this.filteredRecentContentList = [...this.recentContent];
  }

  public onFilter(filterData: { text: string; category: string; type: string }) {
    this.filteredRecentContentList = this.recentContent.filter(content => {
      const matchesText = content.title.toLowerCase().startsWith(filterData.text.toLowerCase());
      const matchesCategory = filterData.category ? content.category === filterData.category : true;
      const matchesType = filterData.type ? content.type === filterData.type : true;
      return matchesText && matchesCategory && matchesType;
    });
  }

  public updateRecentContents() {
    this.filteredRecentContentList = [...this.contentService.getRecentContent()];
  }

}

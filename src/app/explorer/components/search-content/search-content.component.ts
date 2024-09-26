import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search-content',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    MatSuffix,
    NgForOf,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    FormsModule,
    MatButton
  ],
  templateUrl: './search-content.component.html',
  styleUrl: './search-content.component.css'
})
export class SearchContentComponent implements OnInit{

  //#region Attributes
  @Output() protected filterRequested = new EventEmitter<{ text: string; category: string; type: string }>();
  @Input() categories: string[] = ['comedia','drama','fantasia','aventura'];
  @Input() types: string[] = ['movie', 'documentary','series'];
  public searchText: string = '';
  public selectedCategory: string = '';
  public selectedType: string = '';

  //#endregion Attributes

  //#region Methods
  constructor() {}

  ngOnInit(): void {}

  protected onFilter() {
    this.filterRequested.emit({
      text: this.searchText,
      category: this.selectedCategory,
      type: this.selectedType
    });
  }
  //#endregion Methods

}

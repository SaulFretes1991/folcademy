import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { TabPreviewComponent } from './tab-preview/tab-preview.component';
import { TabComponent } from './tab/tab.component';



@NgModule({
  declarations: [
    CardComponent,
    SearchComponent,
    TabPreviewComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent,
    SearchComponent,
    TabComponent,
    TabPreviewComponent
  ]
})
export class SharedModule { }

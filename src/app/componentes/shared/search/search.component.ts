import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() handleSearchEvent = new EventEmitter<string>() 

  search(value: any) {
    this.handleSearchEvent.emit(value.target.value) 
  }

}
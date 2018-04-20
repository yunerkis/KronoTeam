import { Component } from '@angular/core';
import stores from '../mocks/categories.json'
import { Filter } from './filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  stores;
  constructor(public filter: Filter) {
    this.stores = filter.getStores()
    filter.valueChange.subscribe((value) => {
      this.stores = value
    })
  }
  
};
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
  products;
  constructor(public filter: Filter) {
    this.products = filter.getProducts()
    filter.valueChange.subscribe((value) => {
      this.products = value
    })
  }
};

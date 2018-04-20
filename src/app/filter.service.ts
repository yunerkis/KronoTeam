import { Injectable, EventEmitter } from '@angular/core';
import {orderBy, uniqBy} from 'lodash'

import * as categories from '../mocks/categories.json'
import * as products from '../mocks/products.json'

@Injectable()
export class Filter {

  categories= categories;
  products= products;
  searchName = new RegExp('');
  searchSector = '';
  orderBy = 'asc' ;
  selected = [];
  valueChange: EventEmitter<object> = new EventEmitter<object>();
  onSelect: EventEmitter<object> = new EventEmitter<object>();

  constructor() {
  }

  getCategories() {
    return this.categories
  }

  getProducts() {
    return this.products
  }

  getOrder() {
    return this.orderBy
  }

  getSelected() {
    return this.selected
  }

  filterElementsByName(name) {
    const regex = new RegExp(name, 'i');
    this.searchName = regex
    this.categories = categories.filter((item) => regex.test(item.name) && (this.searchSector === item.sector || !this.searchSector.length))
    this.valueChange.emit(orderBy(this.categories, ['rating'],[orderBy]))
  }

  filterElementsBySector(sector) {
    this.categories = categories.filter(
      (item) => (sector === item.sector || !sector.length) && this.searchName.test(item.name)
    )
    this.searchSector = sector;
    this.valueChange.emit(orderBy(this.categories, ['rating'],[orderBy]))
  }

  selectProduct(obj) {
    this.selected = uniqBy(this.selected.concat([obj]), (e) => e.name);
    this.onSelect.emit(this.selected)
  }

  removeProduct(obj) {
    this.selected = this.selected.filter(item => item.name !== obj.name);
    this.onSelect.emit(this.selected)
  }

  changeOrder(order) {
    this.orderBy = order
    this.valueChange.emit(orderBy(this.categories, ['rating'],[order]))
  }
}

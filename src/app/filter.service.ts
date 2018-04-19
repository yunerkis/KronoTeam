import stores from '../mocks/storage'
import { Injectable, EventEmitter } from '@angular/core';
import {orderBy} from 'lodash'


@Injectable()
export class Filter {

stores= stores.commerces;
searchName = new RegExp('');
searchSector = '';
orderBy = 'asc' ;
selected;
valueChange: EventEmitter<object> = new EventEmitter<object>();
onSelect: EventEmitter<object> = new EventEmitter<object>();
constructor() { }
  getStores() {
    return orderBy(this.stores, ['rating'],[orderBy])
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
    this.stores = stores.commerces.filter((item) => regex.test(item.name) && (this.searchSector === item.sector || !this.searchSector.length))
    this.valueChange.emit(orderBy(this.stores, ['rating'],[orderBy]))
  }
  
  filterElementsBySector(sector) { 
    this.stores = stores.commerces.filter(
      (item) => (sector === item.sector || !sector.length) && this.searchName.test(item.name)
    )
    this.searchSector = sector;
    this.valueChange.emit(orderBy(this.stores, ['rating'],[orderBy]))
  }
  selectStore(obj) {
    this.selected = obj;
    this.onSelect.emit(this.selected)
  }
  changeOrder(order) {
    this.orderBy = order
    this.valueChange.emit(orderBy(this.stores, ['rating'],[order]))
  }
}
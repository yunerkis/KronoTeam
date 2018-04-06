import {Component} from '@angular/core';
import { Filter } from '../filter.service';

@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './dropdown-basic.html',
  styleUrls: ['./dropdown-basic.scss']
})
export class DropdownBasic {
  constructor(public filter: Filter) {}
  triggerRating(value) {
    this.filter.changeOrder(value)
  }
  triggerSector(value) {
    this.filter.filterElementsBySector(value)
  }
}


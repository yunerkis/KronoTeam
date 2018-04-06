import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from '../filter.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(public filter: Filter) {}

  triggerEvent(event) {
    console.log(event.target.value)
    this.filter.filterElementsByName(event.target.value)
  }

  ngOnInit() {
  }

}
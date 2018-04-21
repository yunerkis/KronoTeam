import { Component, OnInit } from '@angular/core';
import { Filter } from '../filter.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  categories = []

  constructor(public storeService: Filter) {
    this.categories = storeService.getCategories();
  }

  ngOnInit() {
  }

}

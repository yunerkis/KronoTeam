import {Component, Input} from '@angular/core';
import { Filter } from '../filter.service';


@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product: {
    name: String,
    sector: String,
    logo: String,
    rating: String,
    description: String
  }
  constructor(public storeServices: Filter) {}
    open(){
      this.storeServices.selectStore(this.product)
    }
}


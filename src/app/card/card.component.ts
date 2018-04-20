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
    img: String,
    price: String,
    disponibilidad: String,
    cantidad: String
  }
  constructor(public storeServices: Filter) {}
    open(){
      this.storeServices.selectStore(this.product)
    }
}


import {Component, Input} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from '../modal/modal-basic';
import { Filter } from '../filter.service';


@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() store: {
    name: String,
    sector: String,
    logo: String,
    rating: String,
    description: String
  }
  constructor(private modalService: NgbModal, public storeServices: Filter) {}
    open(){
      this.modalService.open(NgbdModalBasic, {size: 'lg'})
      this.storeServices.selectStore(this.store)
    }  
}


import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from '../modal/modal-basic';


@Component({
  selector: 'card-component',
  templateUrl: './card.component.html'
})
export class CardComponent {
  constructor(private modalService: NgbModal) {}
    open(content){
      this.modalService.open(NgbdModalBasic)
    }  
}


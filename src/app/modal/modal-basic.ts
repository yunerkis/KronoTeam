import {Component, Input} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Filter } from '../filter.service';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-basic.html',
  styleUrls: ['./modal-basic.scss']
})
export class NgbdModalBasic {
  selected = [];
  total = 0;

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, public storeService: Filter) {
    this.selected = storeService.getSelected();
    if(this.selected.length > 0) {
      this.total = this.selected.length > 1 ? this.selected.reduce((prev, now) => parseFloat(prev.price || prev) + parseFloat( now.price )) : this.selected[0].price;
    } else {
      this.total = 0;
    }
    storeService.onSelect.subscribe((value) => {
      this.selected = value;
      if(this.selected.length > 0) {
        this.total = this.selected.length > 1 ? this.selected.reduce((prev, now) => parseFloat(prev.price || prev) + parseFloat( now.price )) : this.selected[0].price;
      } else {
        this.total = 0;
      }
    })
  }

  close() {
    this.activeModal.dismiss()
  }

  remove(obj) {
    this.storeService.removeProduct(obj)
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

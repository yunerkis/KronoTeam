import {Component, Input} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Filter } from '../filter.service';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-basic.html',
  styleUrls: ['./modal-basic.scss']
})
export class NgbdModalBasic {
  @Input() store: {
    name: String,
    sector: String,
    logo: String,
    rating: String,
    description: String
  }
  closeResult: string;

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, public storeService: Filter) {
    this.store = storeService.getSelected();
    storeService.onSelect.subscribe((value) => {
      this.store = value;
    })
  }

  close() {
    this.activeModal.dismiss()
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
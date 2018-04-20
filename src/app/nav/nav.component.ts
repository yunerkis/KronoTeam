import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from '../modal/modal-basic';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(private modalService: NgbModal, ) {}
  ngOnInit() {
  }
  open(){
    this.modalService.open(NgbdModalBasic, {size: 'lg'})
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DropdownBasic } from './dropdown/dropdown-basic';
import { CardComponent } from './card/card.component';
import { NgbdModalBasic } from './modal/modal-basic';
import { Filter } from './filter.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    DropdownBasic,
    CardComponent,
    NgbdModalBasic
  ],
  entryComponents: [NgbdModalBasic],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [Filter],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
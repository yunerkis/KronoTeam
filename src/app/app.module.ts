import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { DropdownBasic } from './dropdown/dropdown-basic';
import { CardComponent } from './card/card.component';
import { NgbdModalBasic } from './modal/modal-basic';
import { NgbdRatingConfig } from './rating/rating-component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    DropdownBasic,
    CardComponent,
    NgbdModalBasic,
    NgbdRatingConfig
  ],
  entryComponents: [NgbdModalBasic],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
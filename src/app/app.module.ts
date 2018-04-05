import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { DropdownBasic } from './dropdown/dropdown-basic';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    DropdownBasic,
    CardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
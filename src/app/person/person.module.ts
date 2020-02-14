import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonComponent} from './person.component';
import {FormsModule} from '@angular/forms';
import {UpdatePersonComponent} from './update-person.component';
import {PersonListComponent} from './person-list.component';
import {PersonDetailsComponent} from './person-details.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {PersonService} from './person.service';

@NgModule({
  declarations: [PersonListComponent, PersonComponent, PersonDetailsComponent, UpdatePersonComponent],
  imports: [CommonModule, BrowserModule, FormsModule, HttpClientModule],
  entryComponents: [PersonListComponent, PersonComponent, PersonDetailsComponent, UpdatePersonComponent],
  exports: [PersonListComponent, PersonComponent, PersonDetailsComponent, UpdatePersonComponent],
  providers: [PersonService]
})
export class PersonModule {
}

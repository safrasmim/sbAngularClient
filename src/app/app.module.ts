import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PersonModule} from './person/person.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  // declarations: [AppComponent, PersonListComponent, PersonComponent, PersonDetailsComponent, UpdatePersonComponent],
  // imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  // providers: [],
  // bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA] // NO_ERRORS_SCHEMA
  declarations: [AppComponent],
  imports: [BrowserModule, PersonModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

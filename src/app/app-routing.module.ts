import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonListComponent} from './person/person-list.component';
import {PersonDetailsComponent} from './person/person-details.component';
import {UpdatePersonComponent} from './person/update-person.component';
import {PersonComponent} from './person/person.component';


const routes: Routes = [
  { path: '', redirectTo: 'personlist', pathMatch: 'full' },
  { path: 'personlist', component: PersonListComponent },
  { path: 'add', component: PersonComponent },
  { path: 'update/:id', component: UpdatePersonComponent },
  { path: 'details/:id', component: PersonDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

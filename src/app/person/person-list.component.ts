import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit {
  personList: Observable<Person[]>;

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.personList = this.personService.getPersonsList();
  }

  deletePerson(id: number) {
    this.personService.deletePerson(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  personDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  editPersonDetails(id: number) {
    this.router.navigate(['update', id]);
  }
}

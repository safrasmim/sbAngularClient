import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from './person';
import {PersonService} from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {
  person: Person = new Person();
  submitted = false;

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit() {}

  newPerson(): void {
    this.submitted = false;
    this.person = new Person();
  }

  save() {
    this.personService.createPerson(this.person).subscribe(data => console.log(data), error => console.log(error));
    this.person = new Person();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['personlist']);
  }
}

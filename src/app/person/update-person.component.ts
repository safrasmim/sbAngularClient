import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from './person.service';
import { Person } from './person';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html'
})
export class UpdatePersonComponent implements OnInit {
  id: number;
  person: Person;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private personService: PersonService) {}

  ngOnInit() {
    this.person = new Person();

    this.id = this.route.snapshot.params.id;

    this.personService.getPerson(this.id).subscribe(
      data => {
        console.log(data);
        this.person = data;
      },
      error => console.log(error)
    );
  }

  updatePerson() {
    this.personService.updatePerson(this.id, this.person).subscribe(data => console.log(data), error => console.log(error));
    this.person = new Person();
    this.gotoList();
  }

  onSubmit() {
    this.updatePerson();
    this.submitted = true;
  }

  gotoList() {
    this.router.navigate(['personlist']);
  }
}

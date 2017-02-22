import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { PetService } from './pet.service';
import { lookupListToken } from './providers';

@Component({
  selector: 'foster-pet-form',
  templateUrl: './app/pet-form.component.html',
  styleUrls: ['./app/pet-form.component.css']
})
export class PetFormComponent {
  form;

  constructor(
    private formBuilder: FormBuilder,
    private petService: PetService,
    @Inject(lookupListToken) public lookupLists,
    private router: Router) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      type: this.formBuilder.control('Cats'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator),
    });
  }

  yearValidator(control) {
    if (control.value.trim().length === 0) {
      return null;
    }
    let year = parseInt(control.value);
    let minYear = 1800;
    let maxYear = 2500;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {
        'year': {
          min: minYear,
          max: maxYear
        }
      };
    }
  }

  onSubmit(pet) {
    this.petService.add(pet)
      .subscribe(() => {
        this.router.navigate(['/', pet.type]);
      });
  }
}

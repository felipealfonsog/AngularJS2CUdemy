import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PetService } from './pet.service';

@Component({
  selector: 'foster-pet-list',
  templateUrl: './app/pet-list.component.html',
  styleUrls: ['./app/pet-list.component.css']
})
export class PetListComponent {
  type = '';
  pets = [];
  paramsSubscription;

  constructor(
    private petService: PetService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params
      .subscribe(params => {
        let type = params['type'];
        if(type.toLowerCase() === 'all') {
          type = '';
        }
        this.getPets(type);
      });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  onPetDelete(pet) {
    this.petService.delete(pet)
      .subscribe(() => {
        this.getPets(this.type);
      });
  }

  getPets(type) {
    this.type = type;
    this.petService.get(type)
      .subscribe(pets => {
        this.pets = pets;
      });
  }
}

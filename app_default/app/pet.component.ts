import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'foster-pet',
  templateUrl: './app/pet.component.html',
  styleUrls: ['./app/pet.component.css']
})
export class PetComponent {
  @Input() pet;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.pet);
  }
}

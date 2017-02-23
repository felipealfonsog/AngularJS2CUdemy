import { Pipe } from '@angular/core';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe {
  transform(pets) {
    var categories = [];
    pets.forEach(pet => {
      if (categories.indexOf(pet.category) <= -1) {
        categories.push(pet.category);
      }
    });
    return categories.join(', ');
  }
}
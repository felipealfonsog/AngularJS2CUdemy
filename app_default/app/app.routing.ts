import { Routes, RouterModule } from '@angular/router';

import { PetFormComponent } from './pet-form.component';
import { PetListComponent } from './pet-list.component';

const appRoutes: Routes = [
  { path: 'add', component: PetFormComponent },
  { path: ':type', component: PetListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];

export const routing = RouterModule.forRoot(appRoutes);

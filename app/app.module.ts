import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { PetComponent } from './pet.component';
import { PetListComponent } from './pet-list.component';
import { FavoriteDirective } from './fosterRequest.directive';
import { CategoryListPipe } from './category-list.pipe';
import { PetFormComponent } from './pet-form.component';
import { PetService } from './pet.service';
import { lookupListToken, lookupLists } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    PetComponent,
    PetListComponent,
    FavoriteDirective,
    CategoryListPipe,
    PetFormComponent
  ],
  providers: [
    PetService,
    { provide: lookupListToken, useValue: lookupLists },
    { provide: XHRBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
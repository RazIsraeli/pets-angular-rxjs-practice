import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetModalComponent } from './cmps/add-pet-modal/add-pet-modal.component';
import { PetResolver } from './services/pet.resolver';
import { PetDetailsComponent } from './views/pet-details/pet-details.component';
import { PetIndexComponent } from './views/pet-index/pet-index.component';

const routes: Routes = [
  {
    path: 'pet/:id',
    component: PetDetailsComponent,
    resolve: { pet: PetResolver },
  },
  {
    path: '',
    component: PetIndexComponent,
    children: [
      {
        path: 'edit/:id',
        component: AddPetModalComponent,
        resolve: { pet: PetResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetIndexComponent } from './views/pet-index/pet-index.component';

const routes: Routes = [{ path: '', component: PetIndexComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

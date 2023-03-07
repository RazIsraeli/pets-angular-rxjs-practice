import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './cmps/login/login.component';
import { PetEditComponent } from './cmps/pet-edit/pet-edit.component';
import { SignupComponent } from './cmps/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { PetResolver } from './services/pet.resolver';
import { LoginSignupComponent } from './views/login-signup/login-signup.component';
import { PetDetailsComponent } from './views/pet-details/pet-details.component';
import { PetIndexComponent } from './views/pet-index/pet-index.component';

const routes: Routes = [
  {
    path: 'pet/:id',
    component: PetDetailsComponent,
    resolve: { pet: PetResolver },
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginSignupComponent,
    children: [
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  {
    path: '',
    component: PetIndexComponent,
    children: [
      {
        path: 'edit/:id',
        component: PetEditComponent,
        resolve: { pet: PetResolver },
      },
      {
        path: 'edit',
        component: PetEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

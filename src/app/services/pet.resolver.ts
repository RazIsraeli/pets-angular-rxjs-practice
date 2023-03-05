import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Pet } from '../models/pet';
import { PetService } from './pet.service';

@Injectable({
  providedIn: 'root',
})
export class PetResolver implements Resolve<Pet> {
  constructor(private petService: PetService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Pet> {
    const petId = route.params['id'];
    return this.petService.getPetById(petId);
  }
}

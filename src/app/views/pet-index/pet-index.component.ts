import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from 'src/app/models/pet';
import { User } from 'src/app/models/user';
import { PetService } from 'src/app/services/pet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'pet-index',
  templateUrl: './pet-index.component.html',
  styleUrls: ['./pet-index.component.scss'],
})
export class PetIndexComponent implements OnInit {
  constructor(
    private petService: PetService,
    private userService: UserService
  ) {}

  pets$!: Observable<Pet[]>;
  loggedInUser$!: Observable<User | undefined>;

  isShowAddPetModal: boolean = false;

  ngOnInit() {
    this.petService.query();
    this.pets$ = this.petService.pets$;
    this.loggedInUser$ = this.userService.loggedInUser$;
  }

  addPet(pet: Pet) {
    this.petService.save(pet);
    this.isShowAddPetModal = false;
  }

  deletePet(petId: string) {
    this.petService.delete(petId);
  }

  closeModal(ev: boolean) {
    this.isShowAddPetModal = false;
  }
}

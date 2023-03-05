import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'pet-index',
  templateUrl: './pet-index.component.html',
  styleUrls: ['./pet-index.component.scss'],
})
export class PetIndexComponent implements OnInit {
  constructor(private petService: PetService) {}

  pets$!: Observable<Pet[]>;

  isShowAddPetModal: boolean = false;

  ngOnInit() {
    this.petService.query();
    this.pets$ = this.petService.pets$;
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

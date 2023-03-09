import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from 'src/app/models/pet';
import { User } from 'src/app/models/user';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'pet-preview',
  templateUrl: './pet-preview.component.html',
  styleUrls: ['./pet-preview.component.scss'],
})
export class PetPreviewComponent implements OnInit {
  @Input() pet!: Pet;
  @Output() deletePet = new EventEmitter<string>();

  loggedInUser$!: Observable<User | undefined>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loggedInUser$ = this.userService.loggedInUser$;
  }

  onDeletePet(petId: string) {
    this.deletePet.emit(petId);
  }

  onEditPet(petId: string) {
    this.deletePet.emit(petId);
  }
}

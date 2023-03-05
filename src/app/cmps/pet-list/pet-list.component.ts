import { Component, Input } from '@angular/core';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
})
export class PetListComponent {
  @Input() pets!: Pet[] | null;
}

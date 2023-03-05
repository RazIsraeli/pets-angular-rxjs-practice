import { Component, Input } from '@angular/core';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'pet-preview',
  templateUrl: './pet-preview.component.html',
  styleUrls: ['./pet-preview.component.scss'],
})
export class PetPreviewComponent {
  @Input() pet!: Pet;
}

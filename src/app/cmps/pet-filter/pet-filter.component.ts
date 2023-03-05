import { Component, OnInit, OnDestroy } from '@angular/core';
import { debounce } from 'rxjs';
import { distinctUntilChanged } from 'rxjs';
import { debounceTime } from 'rxjs';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'pet-filter',
  templateUrl: './pet-filter.component.html',
  styleUrls: ['./pet-filter.component.scss'],
})
export class PetFilterComponent implements OnInit, OnDestroy {
  constructor(private petService: PetService) {}
  petFilter!: string;
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.petService.petFilter$.subscribe(
      (petFilter) => (this.petFilter = petFilter)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSetFilter() {
    this.petService.setPetFilter(this.petFilter);
  }
}

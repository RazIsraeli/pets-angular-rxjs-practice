import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs';
import { switchMap } from 'rxjs';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'pet-filter',
  templateUrl: './pet-filter.component.html',
  styleUrls: ['./pet-filter.component.scss'],
})
export class PetFilterComponent implements OnInit {
  constructor(private petService: PetService) {}

  searchTerm = new FormControl('');
  petFilter$!: Observable<string>;

  ngOnInit() {
    this.petFilter$ = this.petService.petFilter$;
    this.searchTerm.valueChanges
      .pipe(
        debounceTime(600),
        distinctUntilChanged(),
        switchMap(() => {
          return this.petService.setPetFilter(this.searchTerm.value!);
        })
      )
      .subscribe();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss'],
})
export class PetDetailsComponent implements OnInit, OnDestroy {
  constructor(private router: ActivatedRoute, private route: Router) {}

  pet!: Pet;

  subscription!: Subscription;

  async ngOnInit(): Promise<void> {
    this.subscription = this.router.data.subscribe((data) => {
      this.pet = data['pet'];
    });
  }

  onBack() {
    this.route.navigateByUrl('/');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

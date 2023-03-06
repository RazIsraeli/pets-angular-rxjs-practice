import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.scss'],
})
//! REQUIRES REACTIVEFORMSMODULE, FORMBUILDER, FORMGROUP, VALIDATORS
export class PetEditComponent implements OnInit, OnDestroy {
  @Output() addPet = new EventEmitter<Pet>();
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() openModal = new EventEmitter<boolean>();

  form!: FormGroup;
  name!: FormControl;
  age!: FormControl;
  type!: FormControl;
  color!: FormControl;

  pet!: Pet;
  subscription!: Subscription;

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.createFormControls();
    this.createForm();

    this.openModal.emit(true);

    this.subscription = this.route.data.subscribe(({ pet }) => {
      this.pet = pet || (this.petService.getEmptyPet() as Pet);
    });

    this.form.valueChanges
      .pipe(
        filter((form) => this.form.valid),
        map((form) => {
          form.name = form.name.replace(/<(?:.|\n)*?>/gm, '');
          return form;
        }),
        map((form) => {
          form.updated = new Date();
          return form;
        })
      )
      .subscribe((form) => {
        const { name, age, type, color } = form;
        const petToCreate = {
          name,
          age,
          type,
          color,
        };
        this.pet = petToCreate as Pet;
      });
  }

  createFormControls() {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25),
    ]);
    this.age = new FormControl('', [Validators.required, Validators.min(0)]);
    this.type = new FormControl('', Validators.required);
    this.color = new FormControl('', Validators.required);
  }

  createForm() {
    this.form = new FormGroup({
      name: this.name,
      age: this.age,
      type: this.type,
      color: this.color,
    });
  }

  onSavePet() {
    this.addPet.emit(this.pet);
  }

  onCloseModal() {
    this.closeModal.emit(true);
    this.router.navigateByUrl('/');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

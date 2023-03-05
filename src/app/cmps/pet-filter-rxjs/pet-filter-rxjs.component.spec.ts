import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetFilterRxjsComponent } from './pet-filter-rxjs.component';

describe('PetFilterRxjsComponent', () => {
  let component: PetFilterRxjsComponent;
  let fixture: ComponentFixture<PetFilterRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetFilterRxjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetFilterRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

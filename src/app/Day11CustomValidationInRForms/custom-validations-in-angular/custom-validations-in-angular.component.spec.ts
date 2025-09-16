import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidationsInAngularComponent } from './custom-validations-in-angular.component';

describe('CustomValidationsInAngularComponent', () => {
  let component: CustomValidationsInAngularComponent;
  let fixture: ComponentFixture<CustomValidationsInAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomValidationsInAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomValidationsInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

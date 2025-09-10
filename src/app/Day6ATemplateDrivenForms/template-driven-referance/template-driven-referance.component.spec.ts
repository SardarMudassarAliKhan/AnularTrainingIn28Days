import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenReferanceComponent } from './template-driven-referance.component';

describe('TemplateDrivenReferanceComponent', () => {
  let component: TemplateDrivenReferanceComponent;
  let fixture: ComponentFixture<TemplateDrivenReferanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenReferanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenReferanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

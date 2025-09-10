import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemRefParentCompComponent } from './tem-ref-parent-comp.component';

describe('TemRefParentCompComponent', () => {
  let component: TemRefParentCompComponent;
  let fixture: ComponentFixture<TemRefParentCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemRefParentCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemRefParentCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

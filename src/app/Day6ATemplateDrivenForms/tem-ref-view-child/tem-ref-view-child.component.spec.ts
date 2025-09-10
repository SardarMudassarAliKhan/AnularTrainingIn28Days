import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemRefViewChildComponent } from './tem-ref-view-child.component';

describe('TemRefViewChildComponent', () => {
  let component: TemRefViewChildComponent;
  let fixture: ComponentFixture<TemRefViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemRefViewChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemRefViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptfeedbackComponent } from './adoptfeedback.component';

describe('AdoptfeedbackComponent', () => {
  let component: AdoptfeedbackComponent;
  let fixture: ComponentFixture<AdoptfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

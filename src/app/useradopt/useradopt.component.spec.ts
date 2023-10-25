import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseradoptComponent } from './useradopt.component';

describe('UseradoptComponent', () => {
  let component: UseradoptComponent;
  let fixture: ComponentFixture<UseradoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseradoptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseradoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

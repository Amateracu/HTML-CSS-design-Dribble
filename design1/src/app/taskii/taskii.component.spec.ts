import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskiiComponent } from './taskii.component';

describe('TaskiiComponent', () => {
  let component: TaskiiComponent;
  let fixture: ComponentFixture<TaskiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

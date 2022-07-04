import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlvianComponent } from './alvian.component';

describe('AlvianComponent', () => {
  let component: AlvianComponent;
  let fixture: ComponentFixture<AlvianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlvianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlvianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

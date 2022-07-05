import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotairesComponent } from './notaires.component';

describe('NotairesComponent', () => {
  let component: NotairesComponent;
  let fixture: ComponentFixture<NotairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

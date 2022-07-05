import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierProspectComponent } from './dossier-prospect.component';

describe('DossierProspectComponent', () => {
  let component: DossierProspectComponent;
  let fixture: ComponentFixture<DossierProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierProspectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

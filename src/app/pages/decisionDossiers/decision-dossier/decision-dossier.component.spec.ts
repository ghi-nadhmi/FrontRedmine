import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionDossierComponent } from './decision-dossier.component';

describe('DecisionDossierComponent', () => {
  let component: DecisionDossierComponent;
  let fixture: ComponentFixture<DecisionDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisionDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

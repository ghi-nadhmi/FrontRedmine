import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetSaisiComponent } from './objet-saisi.component';

describe('ObjetSaisiComponent', () => {
  let component: ObjetSaisiComponent;
  let fixture: ComponentFixture<ObjetSaisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetSaisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetSaisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

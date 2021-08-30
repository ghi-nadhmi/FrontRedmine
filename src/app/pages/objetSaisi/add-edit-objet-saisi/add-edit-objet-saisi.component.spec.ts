import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditObjetSaisiComponent } from './add-edit-objet-saisi.component';

describe('AddEditObjetSaisiComponent', () => {
  let component: AddEditObjetSaisiComponent;
  let fixture: ComponentFixture<AddEditObjetSaisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditObjetSaisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditObjetSaisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

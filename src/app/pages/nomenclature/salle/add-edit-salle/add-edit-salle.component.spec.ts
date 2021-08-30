import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSalleComponent } from './add-edit-salle.component';

describe('AddEditSalleComponent', () => {
  let component: AddEditSalleComponent;
  let fixture: ComponentFixture<AddEditSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

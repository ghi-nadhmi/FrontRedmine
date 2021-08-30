import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEntiteComponent } from './add-edit-entite.component';

describe('AddEditEntiteComponent', () => {
  let component: AddEditEntiteComponent;
  let fixture: ComponentFixture<AddEditEntiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditEntiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEntiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

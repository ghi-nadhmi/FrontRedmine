import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteObjetSaisiComponent } from './delete-objet-saisi.component';

describe('DeleteObjetSaisiComponent', () => {
  let component: DeleteObjetSaisiComponent;
  let fixture: ComponentFixture<DeleteObjetSaisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteObjetSaisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteObjetSaisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEntiteComponent } from './delete-entite.component';

describe('DeleteEntiteComponent', () => {
  let component: DeleteEntiteComponent;
  let fixture: ComponentFixture<DeleteEntiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEntiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEntiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

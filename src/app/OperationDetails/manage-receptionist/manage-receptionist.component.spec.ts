import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReceptionistComponent } from './manage-receptionist.component';

describe('ManageReceptionistComponent', () => {
  let component: ManageReceptionistComponent;
  let fixture: ComponentFixture<ManageReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageReceptionistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

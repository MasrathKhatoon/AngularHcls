import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOAdminComponent } from './manager-oadmin.component';

describe('ManagerOAdminComponent', () => {
  let component: ManagerOAdminComponent;
  let fixture: ComponentFixture<ManagerOAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerOAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerOAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

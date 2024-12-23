import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerLabComponent } from './manager-lab.component';

describe('ManagerLabComponent', () => {
  let component: ManagerLabComponent;
  let fixture: ComponentFixture<ManagerLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

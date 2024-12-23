import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHelperComponent } from './manager-helper.component';

describe('ManagerHelperComponent', () => {
  let component: ManagerHelperComponent;
  let fixture: ComponentFixture<ManagerHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerHelperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

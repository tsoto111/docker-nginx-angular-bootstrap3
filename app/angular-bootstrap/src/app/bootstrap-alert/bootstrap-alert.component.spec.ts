import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapAlertComponent } from './bootstrap-alert.component';

describe('BootstrapAlertComponent', () => {
  let component: BootstrapAlertComponent;
  let fixture: ComponentFixture<BootstrapAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

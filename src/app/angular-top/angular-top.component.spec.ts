import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTopComponent } from './angular-top.component';

describe('AngularTopComponent', () => {
  let component: AngularTopComponent;
  let fixture: ComponentFixture<AngularTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularTopComponent]
    });
    fixture = TestBed.createComponent(AngularTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputConversaoComponent } from './input-conversao.component';

describe('InputConversaoComponent', () => {
  let component: InputConversaoComponent;
  let fixture: ComponentFixture<InputConversaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputConversaoComponent]
    });
    fixture = TestBed.createComponent(InputConversaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

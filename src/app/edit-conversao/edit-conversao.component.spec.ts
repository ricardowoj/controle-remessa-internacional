import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConversaoComponent } from './edit-conversao.component';

describe('EditConversaoComponent', () => {
  let component: EditConversaoComponent;
  let fixture: ComponentFixture<EditConversaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditConversaoComponent]
    });
    fixture = TestBed.createComponent(EditConversaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

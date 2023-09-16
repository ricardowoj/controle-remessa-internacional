import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-input-conversao',
  templateUrl: './input-conversao.component.html',
  styleUrls: ['./input-conversao.component.css']
})
export class InputConversaoComponent implements OnInit {
  valueFrom: FormGroup;
  @Output() valueEvent:EventEmitter<number>;
  constructor(private fb: FormBuilder) {
    this.valueEvent = new EventEmitter<number>();
    this.valueFrom = this.fb.group({
      value: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(10)
        ]
      ],
    });
  }
  ngOnInit(): void {}
  onChangesValue(): void {
    if(this.valueFrom['value'].value > 0){
      this.valueEvent.emit(this.valueFrom['value'].value)
    }
  }
}

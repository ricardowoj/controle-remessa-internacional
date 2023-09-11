import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Conversao } from '../model/conversao';

@Component({
  selector: 'app-input-conversao',
  templateUrl: './input-conversao.component.html',
  styleUrls: ['./input-conversao.component.css']
})
export class InputConversaoComponent implements OnInit {
  value: number = 0;
  @Output() valueEvent:EventEmitter<number>;
  constructor(){
    this.valueEvent = new EventEmitter<number>();
  }
  ngOnInit(): void {}
  onChangesValue(): void {
    this.valueEvent.emit(this.value)
  }
}

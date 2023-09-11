import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conversao } from '../model/conversao';
import { Transacoes } from '../model/transacoes';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-conversao',
  templateUrl: './edit-conversao.component.html',
  styleUrls: ['./edit-conversao.component.css']
})
export class EditConversaoComponent implements OnInit {
  conversao!: Conversao;
  transacoes: Transacoes = new Transacoes();
  @Output() conversaoChange: EventEmitter<Transacoes> = new EventEmitter<Transacoes>()
  constructor(private route:ActivatedRoute, private router:Router) { }
  ngOnInit(): void {
    let idParam = this.route.snapshot.params[`id`];
    this.route.paramMap.pipe(map(()=> window.history.state)).subscribe(res => {
      this.conversao = res[idParam];
      this.transacoes['listaConversao'] = res;
    })
  }
  onSalvar() {
    for (let i = 0; i < this.transacoes['listaConversao'].length; i++) {
      const element = this.transacoes['listaConversao'][i];
      if(element.id == this.conversao.id) {
        this.transacoes['listaConversao'][element.id] = this.conversao;
        return;
      }
    }
    this.router.navigate([''], {state: this.transacoes});
  }
}

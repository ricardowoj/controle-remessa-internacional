import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conversao } from '../model/conversao';
import { Transacoes } from '../model/transacoes';
import { map } from 'rxjs/operators';

const COTACAO_DOLAR = 5.50;

const moedaEnum = Object.freeze({
  REAL :  "Real",
  DOLAR:  "Dolar"
});

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})

export class LandPageComponent implements OnInit {
  conversao!: Conversao;
  transacoes!: Transacoes;
  displayedColumns: string[] = ['data', 'de', 'valorOriginal', 'para', 'valorConvertido', 'cotacao', 'actions'];
  constructor(private route: ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.resetConversao()
    this.transacoes = new Transacoes();
    this.preparaConversaoEditada();
  }
  onConvert() {
    const novaConversao = new Conversao(this.gerarIdConversao(), this.conversao.valorOriginal, COTACAO_DOLAR, moedaEnum.REAL, moedaEnum.DOLAR);
    this.transacoes['listaConversao'].push(novaConversao);
    this.transacoes['listaConversao'] = [...this.transacoes['listaConversao']];
    this.resetConversao();
    this.addConversaoLocalStorage(novaConversao);
  }
  onResetValue() {
    if(this.conversao.valorOriginal < 0) {
      this.resetConversao();
    }
  }
  resetConversao() {
    this.conversao = new Conversao(0, 0, 0, "", "");
  }
  gerarIdConversao() {
    return this.transacoes['listaConversao'].length == 0 ? 0 : this.transacoes['listaConversao'].length;
  }
  preparaConversaoEditada() {
    this.route.paramMap.pipe(map(()=> window.history.state))
      .subscribe(res => {
        let conversoes :Transacoes = res;
        for (const key in conversoes['listaConversao']) {
          if (Object.prototype.hasOwnProperty.call(conversoes['listaConversao'], key)) {
            const element = conversoes['listaConversao'][key];
            if(element.id != undefined) {
              this.transacoes['listaConversao'].push(new Conversao(element.id, element.valorOriginal, element.cotacao, element.de, element.para));
            }
          }
        }
      })
  }
  onValueEvent(event: number) {
    this.conversao.valorOriginal = event;
  }
  desabilitaBotao() {
    return !(this.conversao.valorOriginal > 0);
  }

  private addConversaoLocalStorage(novaConversao: Conversao) {
    localStorage.setItem("conversao", JSON.stringify(novaConversao));
  }
}


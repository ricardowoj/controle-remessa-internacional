export class Conversao {
  data: Date;
  valorConvertido: number;
  constructor(public id: number, public valorOriginal: number, public cotacao: number, public de: String, public para: String) {
    this.id = this.id;
    this.data = new Date();
    this.valorOriginal = valorOriginal;
    this.cotacao = cotacao;
    this.valorConvertido = valorOriginal * cotacao;
    this.de = de;
    this.para = para;
  }
}

class BotaoG{
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao = createButton(this.texto)
    this.botao.mousePressed(() => this._alteraCena())
    this.botao.addClass('botao-tela-inicial');

  }

  draw() {
    this.botao.position(this.x, this.y);
   
  }

  _alteraCena() {
    this.botao.remove();
    cenaAtual = 'comoJogar';
  }
}
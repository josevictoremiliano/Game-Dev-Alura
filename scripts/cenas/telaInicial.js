class TelaInicial{
  construction(){
  
  }
  
  draw(){
    this._imagemDeFundo()
    this._texto()
    this._botao()
  }
  _imagemDeFundo(){
    image(imagemTelaInicial, 0 ,0, width, height)
  }
  _texto(){
    textFont(font)
    textAlign(CENTER)
    textSize(50)
    text("As Aventuras de", width / 2, height /3)
    textSize(100)
    text("HipstA", width / 2, height /7 * 4)
  }
  _botao(){
    botaoG.y =  height /5 * 4;
    botaoG.draw();
  }
}
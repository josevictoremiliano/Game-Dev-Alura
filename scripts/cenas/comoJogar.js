class ComoJogar{
  construction(){
  
  }
  
  draw(){
    this._imagemDeFundo()
    this._botao()
    this._texto()
    
  }
  _imagemDeFundo(){
    image(imagemTelaInicial, 0 ,0, width, height)
  }
  _texto(){
    textFont(font)
    textAlign(CENTER)
    textSize(50)
    text("Ultilize seta para cima ", width / 2, height /3)
    text("do seu teclado para jogar.", width / 2, height /7 * 4)
  }
  _botao(){
    botaoG.y =  height /5 * 4;
    botaoG.draw();
  }
}
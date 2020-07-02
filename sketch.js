function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(25);
  trilhaSonora.loop();
  jogo = new Jogo();
  jogo.setup();
  telaInicial = new TelaInicial()
  comoJogar = new ComoJogar()
  
  
  
  cenas = {
   jogo,
   comoJogar,
   telaInicial
  }
  botaoG  = new BotaoG('Iniciar', width/2) 
  proximo  = new Proximo('➡', width/5) 
}

function keyPressed() {
  jogo.keyPressed(key)
}

function draw() {
 cenas[cenaAtual].draw();
}
function preload() {
  imagemTelaInicial = loadImage("imagens/assets/telaInicial.png");
  font = loadFont("imagens/assets/fonteTelaInicial.otf");
  imagemCenario = loadImage("imagens/cenario/floresta.png");
  imgGameOver = loadImage("imagens/assets/game-over.png");
  imgCoracao = loadImage("imagens/assets/coracao.png");
  imgPersonagem = loadImage("imagens/personagens/correndo.png");
  imgInimigo = loadImage("imagens/inimigo/gotinha.png");
  imgInimigoTroll = loadImage("imagens/inimigo/troll.png");
  imgInimigoVoador = loadImage("imagens/inimigo/gotinha-voadora.png");
  fita = loadJSON('fita/fita.json')
  
  trilhaSonora = loadSound("music/trilha_jogo.mp3");
  somDoPulo = loadSound("music/somPulo.mp3")
}
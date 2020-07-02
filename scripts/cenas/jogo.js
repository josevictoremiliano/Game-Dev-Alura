class Jogo {
  constructor() {
    this.indice = 0;
    
    this.mapa = fita.mapa
  }
  setup() {
    cenario = new Cenario(imagemCenario, 2);
    pontuacao = new pontuacao();
     vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)

    personagem = new Personagem(matrizPersonagem, imgPersonagem, 0, 30, 110, 135, 220, 270);

    const inimigo = new Inimigo(matrizInimigo, imgInimigo, width - 52, 30, 52, 52, 104, 104, 10, 100);
    const inimigo2troll = new Inimigo(matrizInimigoGrande, imgInimigoTroll, width - 52, 0, 200, 200, 400, 400, 15, 100);
    frameRate(25);
    const inimigo3voador = new Inimigo(matrizInimigoVoador, imgInimigoVoador, width - 52, 300, 100, 75, 200, 150, 10, 100);

    inimigos.push(inimigo)
    inimigos.push(inimigo2troll)
    inimigos.push(inimigo3voador)
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
      somDoPulo.play();
    }
    if (key === 'Enter'){
      cenaAtual = 'jogo';
    }
    
  }
  draw() {
    cenario.exibe();
    cenario.move();

    vida.draw();
    pontuacao.exibe()
    pontuacao.pontoAdd()

    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice]
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe()
    inimigo.move()


    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparecer()
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      console.log('Colidiu');


      vida.perdeVida()
      personagem.ficaInv()
      if (vida.vidas === 0) {
        image(imgGameOver, width / 2 - 200, height / 3)
        somDoPulo.stop();
        trilhaSonora.stop();
        noLoop();
      }
    }
  }
}
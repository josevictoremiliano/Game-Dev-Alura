class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoy, largura, altura, larguraSprite, alturaSprite, velocidade) {
    super(matriz, imagem, x, variacaoy, largura, altura, larguraSprite, alturaSprite)

    this.velocidade = velocidade
    this.x = x
  }

  move() {
    this.x = this.x - this.velocidade
  }
  aparecer() {
      this.x = width
    }
}
class pontuacao {
  constructor() {
    this.pontos = 0
  }

  exibe() {
    textAlign(RIGHT)
    textFont(font)
    fill('#fff')
    textSize(45)
    text(parseInt(this.pontos), width - 30, 60)
  }

  pontoAdd() {
    this.pontos = this.pontos + 0.2
  }
}
// Lógica do jogo
let jogo = new Phaser.Game({
  width: window.innerWidth,
  height: window.innerHeight,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
});

function preload() {
  // Carregar recursos
  this.load.image('torre', 'https:                              
}

function create() {
                  
  let torre = this.add.image(window.innerWidth / 2, window.innerHeight - 50, '//via.placeholder.com/50x50');
}

function create() {
  // Criar a torre
  let torre = this.add.image(window.innerWidth / 2, window.innerHeight - 50, 'torre');
  torre.setScale(2);
  torre.setOrigin(0.5, 1);

  // Adicionar a base da torre
  let base = this.add.rectangle(window.innerWidth / 2, window.innerHeight, 100, 20, 0x8B4513);
  base.setOrigin(0.5, 1);

  // Adicionar a parte superior da torre
  let topo = this.add.rectangle(window.innerWidth / 2, window.innerHeight - 70, 50, 20, 0xFFD700);
  topo.setOrigin(0.5, 1);
}

function update() {
  // Atualizar a lógica do jogo
}

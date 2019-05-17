import { Game } from 'phaser';
import Boot from './scenes/Boot';

let config: const = {
  width: 2048,
  height: 1536,
  backgroundColor: '#530000',
  type: Phaser.AUTO,
  scene: [Boot],
  title: 'Edubits sjabloon',
  parent: 'game' // key van Game
};

// create the game, and pass it the configuration
let game = new Phaser.Game(config);

game.CONFIG   = {
  width   : config.width,
  height  : config.height,
  centerX : Math.round(0.5 * config.width),
  centerY : Math.round(0.5 * config.height)
}

console.log('centerX = ' + game.CONFIG.centerX);

function resize() {
  const canvas = document.querySelector('canvas');
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const windowRatio = windowWidth / windowHeight;
  const gameRatio = game.config.width / game.config.height;

  if (windowRatio < gameRatio) {
    canvas.style.width = windowWidth + 'px';
    canvas.style.height = windowWidth / gameRatio + 'px';
  } else {
    canvas.style.width = windowHeight * gameRatio + 'px';
    canvas.style.height = windowHeight + 'px';
  }
}

window.onload = () => {
  resize();
  window.addEventListener('resize', resize, false);
};

// This is for preventing re-run multiple scenes
if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload();
  });
}

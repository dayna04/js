var config = {
  type: Phaser.AUTO,
  // pixel size * tile map size * zoom
  width: 30 * 30,
  height: 30 * 30,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: "#bf0a0a",
  pixelArt: true,
  scene: [main, preloadScene, introScene, toyforestScene, giftroomScene, gameoverScene, winScene, gameScene],
};
window.gift = 0;
var game = new Phaser.Game(config);

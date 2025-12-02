function resetGameGlobals() {
    window.gift = 0;           // reset gifts collected
    window.inventory = {};     // reset inventory if needed
}

class gameoverScene extends Phaser.Scene {
  constructor() {
    super("gameoverScene");
  }

  init(data) {
    this.room
    this.player = data.player;
    this.inventory = data.inventory;
  }
  preload() {
   this.load.image("lose", "assets/losing.png", {
    });

  }

  create() {
    this.add.image(300, 415, "lose").setScale(1.8);

    this.add.text(30, 200, "Santa didn't make it in", {
      fontFamily: "christmaspix",
      fontSize: "40px",
      fill: "#2d1c07",
    });
    this.add.text(30, 255, "time for Christmas...", {
      fontFamily: "christmaspix",
      fontSize: "40px",
      fill: "#2d1c07",
    });
    this.add.text(460, 400, "try again", {
      fontFamily: "christmaspix",
      fontSize: '60px',
      fill: "#3f2d06",
    });
    this.add.text(460, 480, "press space to restart", {
      fontFamily: "christmaspix",
      fontSize: '20px',
      fill: "#3f2d06",
    });
    console.log("This is gameoverScene press spacebar");
    this.scene.stop("showInventory");

    //this.input.once('pointerdown', function(){

    let spaceDown = this.input.keyboard.addKey("SPACE");
spaceDown.on("down", () => {
    resetGameGlobals();  // reset all variables
    this.scene.start("preloadScene"); // go back to the first scene
});
  }
}

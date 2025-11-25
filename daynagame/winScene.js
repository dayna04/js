function resetGameGlobals() {
    window.gift = 0;           // reset gifts collected
    window.inventory = {};     // reset inventory if needed
}
class winScene extends Phaser.Scene {
  constructor() {
    super("winScene");
  }

  init(data) {
    this.room
    this.player = data.player;
    this.inventory = data.inventory;
  }

  preload(){
    this.load.image("win", "assets/winning.png", {
    });
  }

  create() {
    this.add.image(370, 450, "win").setScale(2);

    this.add.rectangle(710, 260, 160, 50, 0x51330b).setOrigin(0.5);
    this.add.rectangle(710, 300, 160, 15, 0x51330b).setOrigin(0.5);
    this.add.rectangle(710, 330, 160, 30, 0x51330b).setOrigin(0.5);
    this.add.rectangle(710, 360, 160, 20, 0x51330b).setOrigin(0.5);
    this.add.rectangle(710, 400, 160, 35, 0x51330b).setOrigin(0.5);
    this.add.rectangle(710, 415, 160, 40, 0x51330b).setOrigin(0.5);
    this.add.rectangle(710, 450, 160, 10, 0x51330b).setOrigin(0.5);
    this.add.rectangle(710, 490, 160, 45, 0x51330b).setOrigin(0.5);
   

    this.add.text(180, 50, "YOU DID IT!", {
      fontFamily: "christmaspix",
      fontSize: "70px",
      fill: "#ffecd3",
    });
    this.add.text(250, 145, "Santa delivered the presents on time!", {
      fontFamily: "christmaspix",
      fontSize: '15px',
      fill: "#ffecd3",
    });
    this.add.text(110, 270, "NORTH POLE", {
      fontFamily: "christmaspix",
      fontSize: "60px",
      fill: "#51330b",
    });
    this.add.text(110, 350, "TOUR", {
      fontFamily: "christmaspix",
      fontSize: "60px",
      fill: "#51330b",
    });
    this.add.text(110, 440, "AN EXCLUSIVE TOUR BY", {
      fontFamily: "christmaspix",
      fontSize: "25px",
      fill: "#51330b",
    });
    this.add.text(110, 480, "SANTA CLAUS HIMSELF!", {
      fontFamily: "christmaspix",
      fontSize: "25px",
      fill: "#51330b",
    });
    this.add.text(160, 700, "PLAY AGAIN?", {
      fontFamily: "christmaspix",
      fontSize: "80px",
      fill: "#fff7ed",
    });
    this.add.text(320, 800, "PRESS SPACE", {
      fontFamily: "christmaspix",
      fontSize: "30px",
      fill: "#fff7ed",
    });
    console.log("This is winScene press spacebar");
    this.scene.stop("showInventory");

    //this.input.once('pointerdown', function(){
    let spaceDown = this.input.keyboard.addKey("SPACE");
spaceDown.on("down", () => {
    resetGameGlobals();  // reset all variables
    this.scene.start("preloadScene"); // go back to the first scene
});
  }
}

class winScene extends Phaser.Scene {
  constructor() {
    super("winScene");
  }

  init(data) {
    this.room
    this.player = data.player;
    this.inventory = data.inventory;
  }

  create() {
    
    this.add.text(200, 400, "YOU DID IT!", {
      fontFamily: "christmaspix",
      fontSize: "70px",
      fill: "#ffecd3ff",
    });
    this.add.text(250, 500, "Santa delivered the presents on time!", {
      fontFamily: "christmaspix",
      fontSize: '15px',
      fill: "#a3eb9cff",
    });
    console.log("This is winScene press spacebar");
    this.scene.stop("showInventory");

    //this.input.once('pointerdown', function(){
    let spaceDown = this.input.keyboard.addKey("SPACE");

    let key1Down = this.input.keyboard.addKey(49);
    let key2Down = this.input.keyboard.addKey(50);
    let key3Down = this.input.keyboard.addKey(51);

    spaceDown.on(
      "down",
      function () {
        console.log("Space pressed, go to introScene");
        this.scene.start("introScene");
      },
      this
    );

    key1Down.on('down', function(){
    console.log("1 pressed, go to toyforestScene");
    this.scene.start("toyforestScene");
    }, this );

    key2Down.on('down', function(){
    console.log("2 pressed (giftroomScene)");
    this.scene.start("giftroomScene");
    }, this );

    key3Down.on('down', function(){
    console.log("3 pressed (gameoverScene)");
    this.scene.start("gameoverScene");
    }, this );
  }
}

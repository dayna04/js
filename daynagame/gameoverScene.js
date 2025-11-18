class gameoverScene extends Phaser.Scene {
  constructor() {
    super("gameoverScene");
  }

  init(data) {
    this.room
    this.player = data.player;
    this.inventory = data.inventory;
  }

  create() {
    
    this.add.text(40, 300, "Santa didn't make it in", {
      fontFamily: "christmaspix",
      fontSize: "50px",
      fill: "#ffecd3ff",
    });
    this.add.text(40, 370, "time for Christmas...", {
      fontFamily: "christmaspix",
      fontSize: "50px",
      fill: "#ffecd3ff",
    });
    this.add.text(300, 500, "press SPACE to try again", {
      fontFamily: "christmaspix",
      fontSize: '15px',
      fill: "#a3eb9cff",
    });
    console.log("This is gameoverScene press spacebar");
    this.scene.stop("showInventory");

    //this.input.once('pointerdown', function(){
    let key1Down = this.input.keyboard.addKey(49);
    let key2Down = this.input.keyboard.addKey(50);
    let key3Down = this.input.keyboard.addKey(51);
    let key4Down = this.input.keyboard.addKey(52);
    let spaceDown = this.input.keyboard.addKey("SPACE");

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

    key4Down.on('down', function(){
    console.log("4 pressed (winScene)");
    this.scene.start("winScene");
    }, this );
  }
}

class gameScene extends Phaser.Scene {
  constructor() {
    super("gameScene");
  }

  create() {
    console.log("gameScene");
    let graphics = this.add.graphics();

    let spaceDown = this.input.keyboard.addKey("SPACE");

    let key1Down = this.input.keyboard.addKey(49);
    let key2Down = this.input.keyboard.addKey(50);
    let key3Down = this.input.keyboard.addKey(51);
    let key4Down = this.input.keyboard.addKey(52);
   
    this.add.text(100, 200, "Press 1 to go to toyforest game", {
      font: "30px christmaspix",
      fill: "#fff5cf",
    });
    this.add.text(100, 300, "Press 2 to go to giftroom game", {
      font: "30px christmaspix",
      fill: "#fff5cf",
    });
    this.add.text(100, 400, "Press SPACE to go to intro game", {
      font: "30px christmaspix",
      fill: "#fff5cf",
    });
    this.add.text(100, 500, "Press 3 to go to gameover scene", {
      font: "30px christmaspix",
      fill: "#fff5cf",
    });
    this.add.text(100, 600, "Press 4 to go to winning scene", {
      font: "30px christmaspix",
      fill: "#fff5cf",
    });

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

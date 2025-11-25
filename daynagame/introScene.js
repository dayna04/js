class introScene extends Phaser.Scene {
  constructor() {
    super({
      key: "introScene",
    });

    // Put global variable here
  }

  // incoming data from scene below
  init(data) {
    this.player = data.player;
    this.inventory = data.inventory;
  }

  preload() {
    // this is the exported JSON map file
    this.load.tilemapTiledJSON("introScene", "assets/xmas.tmj");


    this.load.image("christmasImg", "assets/winter/christmas.png");
    this.load.image("snowImg", "assets/winter/snow.png");
    this.load.image("winterImg", "assets/winter/winter.png");
    this.load.image("winter2Img", "assets/winter/winter2.png");
    this.load.image("xmasImg", "assets/winter/xmas.png");
    this.load.image("signImg", "assets/signboard.png");
    this.load.spritesheet("santaImg", "assets/santa.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
  }

  create() {
    console.log("introScene");

    this.add.text(290, 90, "Follow the path to the", {
    fontFamily: "christmaspix",
    fontSize: "20px",
    color: "#fff3da",
}).setScrollFactor(0) // stays fixed on screen
.setDepth(100);   // Make sure it's above other elements

 this.add.text(350, 130, "toy forest ->", {
    fontFamily: "christmaspix",
    fontSize: "20px",
    color: "#fff3da",
}).setScrollFactor(0) // stays fixed on screen
.setDepth(100);   // Make sure it's above other elements

    // this.time.addEvent({
    //   delay:120,
    //   callback: endSceneFunction,
    //   callbackScope: this,
    //   loop: false,
    // });

    let key1Down = this.input.keyboard.addKey(49);
    let key2Down = this.input.keyboard.addKey(50);
    let key3Down = this.input.keyboard.addKey(51);
    let key4Down = this.input.keyboard.addKey(52);
    let spaceDown = this.input.keyboard.addKey("SPACE");

    spaceDown.on(
      "down",
      function () {
        console.log("Space pressed (introScene)");
        this.scene.start("introScene");
      },
      this
    );

    key2Down.on(
      "down",
      function () {
        console.log("2 pressed (giftroomScene)");
        this.scene.start("giftroomScene");
      },
      this
    );

    key1Down.on(
      "down",
      function () {
        console.log("1 pressed (toyforestScene)");
        this.scene.start("toyforestScene");
      },
      this
    );

    key3Down.on('down', function(){
    console.log("3 pressed (gameoverScene)");
    this.scene.start("gameoverScene");
    }, this );

    key4Down.on('down', function(){
    console.log("4 pressed (winScene)");
    this.scene.start("winScene");
    }, this );

    // Create the map from main
    let map = this.make.tilemap({
      key: "introScene",
    });

    // Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let pipoyaTiles = map.addTilesetImage("pipoya", "pipoyaImg");
    let christmasTiles = map.addTilesetImage("christmas", "christmasImg");
    let snowTiles = map.addTilesetImage("snow", "snowImg");
    let winterTiles = map.addTilesetImage("winter", "winterImg");
    let winter2Tiles = map.addTilesetImage("winter2", "winter2Img");
    let xmasTiles = map.addTilesetImage("xmas", "xmasImg");

    let tilesArray = [
      pipoyaTiles,
      christmasTiles,
      snowTiles,
      winterTiles,
      winter2Tiles,
      xmasTiles,
    ];

    // Load in layers by layers
    this.groundLayer = map.createLayer("groundLayer", tilesArray, 0, 0);
    this.ground2Layer = map.createLayer("ground2Layer", tilesArray, 0, 0);
    this.treeLayer = map.createLayer("treeLayer", tilesArray, 0, 0);
    this.houseLayer = map.createLayer("houseLayer", tilesArray, 0, 0);
    this.decoLayer = map.createLayer("decoLayer", tilesArray, 0, 0);
    this.deco2Layer = map.createLayer("deco2Layer", tilesArray, 0, 0);
    this.objectLayer2 = map.createLayer("signboardLayer", tilesArray, 0, 0);

    this.decoLayer.setCollisionByExclusion(-1, true);
    this.deco2Layer.setCollisionByExclusion(-1, true);

    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("santaImg", {
        start: 105,
        end: 112,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("santaImg", {
        start: 118,
        end: 125,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("santaImg", {
        start: 131,
        end: 138,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("santaImg", {
        start: 144,
        end: 151,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.player = this.physics.add
      .sprite(300, 300, "santaImg")
      .setScale(1)
      .play("down");
    window.player = this.player;
    this.cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(this.player, this.decoLayer);
    this.physics.add.collider(this.player, this.deco2Layer);

    this.physics.world.bounds.width = this.groundLayer.width;
    this.physics.world.bounds.height = this.groundLayer.height;

    this.player.setCollideWorldBounds(true);

    // camera follow player
    this.cameras.main.startFollow(this.player);

    // Prevent black area of edge of the map
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    this.add.image(455, 150, "signImg").setScale(1)
    .setScrollFactor(0); 
  

    // Add main player here with physics.add.sprite

    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);

    // create the arrow keys
    //this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    //this.cameras.main.startFollow(this.player);
  } /////////////////// end of create //////////////////////////////

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("right", true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-160);
      this.player.anims.play("up", true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(160);
      this.player.anims.play("down", true);
    } else {
      this.player.setVelocity(0);
      this.player.anims.stop();
    }
    if (
      this.player.x > 895 &&
      this.player.x < 928 &&
      this.player.y > 352 &&
      this.player.y < 434
    ) {
      console.log("Go to toyforestScene");
      this.scene.start ("toyforestScene")
    }
        if (
      this.player.x > 233 &&
      this.player.x < 270 &&
      this.player.y > 430 &&
      this.player.y < 478
    ) {
      console.log("Go to giftroomScene");
      this.scene.start ("giftroomScene")
    }
  } /////////////////// end of update //////////////////////////////'

  // Function to jump to room1
  toyforestScene(player, tile) {
    console.log("toyforestScene function");
    this.scene.start("toyforestScene", {
      player: player,
      inventory: this.inventory,
    });
  }
    giftroomScene(player, tile) {
    console.log("giftroomScene function");
    this.scene.start("giftroomScene", {
      player: player,
      inventory: this.inventory,
    });
  }
} //////////// end of class world ////////////////////////

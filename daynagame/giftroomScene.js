class giftroomScene extends Phaser.Scene {
  constructor() {
    super({
      key: "giftroomScene",
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
    this.load.tilemapTiledJSON("giftroomScene", "assets/gift.tmj");

    this.load.audio("pop","assets/pop.mp3");

    this.load.image("christmasImg", "assets/winter/christmas.png");
    this.load.image("snowImg", "assets/winter/snow.png");
    this.load.image("winterImg", "assets/winter/winter.png");
    this.load.image("winter2Img", "assets/winter/winter2.png");
    this.load.image("xmasImg", "assets/winter/xmas.png");
    this.load.image("pipoyaImg", "assets/pipoya.png");
    this.load.spritesheet("santaImg", "assets/santa.png",{frameWidth:64, frameHeight:64 });
    this.load.spritesheet("giftImg", "assets/gift.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  create() {
    console.log("giftroomScene");

    this.collectKeySnd = this.sound.add("pop").setVolume(1);
    console.log("Sound loaded?", this.sound.get("pop"));

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
      key: "giftroomScene",
    });

    // Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let iceTiles = map.addTilesetImage("ice", "snowImg");
    let snowTiles = map.addTilesetImage("snow", "winter2Img");
    let xmasTiles = map.addTilesetImage("xmas", "christmasImg");

    let tilesArray = [iceTiles, snowTiles, xmasTiles]

    // Load in layers by layers
    this.groundLayer = map.createLayer("groundLayer", tilesArray, 0, 0);
    this.ground2Layer = map.createLayer("groundLayer2", tilesArray, 0, 0);
    this.objectLayer = map.createLayer("objectLayer", tilesArray, 0, 0);
    this.objectLayer2 = map.createLayer("objectLayer2", tilesArray, 0, 0);
    this.objectLayer2 = map.createLayer("signboardLayer", tilesArray, 0, 0);
  
    this.objectLayer.setCollisionByExclusion(-1, true);
    this.objectLayer2.setCollisionByExclusion(-1, true);

     this.anims.create({
        key:'up',
        frames:this.anims.generateFrameNumbers('santaImg',
        { start:105, end:112 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'left',
        frames:this.anims.generateFrameNumbers('santaImg',
        { start:118, end:125 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'down',
        frames:this.anims.generateFrameNumbers('santaImg',
        { start:131, end:138 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'right',
        frames:this.anims.generateFrameNumbers('santaImg',
        { start:144, end:151 }),
        frameRate:5,
        repeat:-1
    });
    
    //gifts 
    this.anims.create({
      key: "gift1",
      frames: this.anims.generateFrameNumbers("giftImg", {
        start: 0,
        end: 4,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gift2",
      frames: this.anims.generateFrameNumbers("giftImg", {
        start: 0,
        end: 4,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gift3",
      frames: this.anims.generateFrameNumbers("giftImg", {
        start: 0,
        end: 4,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gift4",
      frames: this.anims.generateFrameNumbers("giftImg", {
        start: 0,
        end: 4,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gift5",
      frames: this.anims.generateFrameNumbers("giftImg", {
        start: 0,
        end: 4,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gift6",
      frames: this.anims.generateFrameNumbers("giftImg", {
        start: 0,
        end: 4,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gift7",
      frames: this.anims.generateFrameNumbers("giftImg", {
        start: 0,
        end: 4,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gift8",
      frames: this.anims.generateFrameNumbers("giftImg", {
        start: 0,
        end: 4,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gift9",
      frames: this.anims.generateFrameNumbers("giftImg", {
        start: 0,
        end: 4,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gift10",
      frames: this.anims.generateFrameNumbers("giftImg", {
        start: 0,
        end: 4,
      }),
      frameRate: 5,
      repeat: -1,
    });

    //collect items - toys
    this.gift1 = this.physics.add
      .sprite(352,352, "giftImg")
      .setScale (1.5)
      .play("gift1");

      this.gift2 = this.physics.add
      .sprite(242,139, "giftImg")
      .setScale (1.5)
      .play("gift2");

      this.gift3 = this.physics.add
      .sprite(608,139, "giftImg")
      .setScale (1.5)
      .play("gift3");

      this.gift4 = this.physics.add
      .sprite(890,411, "giftImg")
      .setScale (1.5)
      .play("gift4");

      this.gift5 = this.physics.add
      .sprite(608,475, "giftImg")
      .setScale (1.5)
      .play("gift5");

      this.gift6 = this.physics.add
      .sprite(864,627, "giftImg")
      .setScale (1.5)
      .play("gift6");
      
      this.gift7 = this.physics.add
      .sprite(421,704, "giftImg")
      .setScale (1.5)
      .play("gift7");

      this.gift8 = this.physics.add
      .sprite(192,607, "giftImg")
      .setScale (1.5)
      .play("gift8");

      this.gift9 = this.physics.add
      .sprite(64,96, "giftImg")
      .setScale (1.5)
      .play("gift9");

      this.gift10 = this.physics.add
      .sprite(613,736, "giftImg")
      .setScale (1.5)
      .play("gift10");
      
        this.player = this.physics.add.sprite(100,326, 'santaImg').setScale(1).play('down')
        this.cursors = this.input.keyboard.createCursorKeys();
        window.player = this.player;

        this.physics.add.collider(this.player, this.objectLayer)
        this.physics.add.collider(this.player, this.objectLayer2)

       this.physics.world.bounds.width = this.groundLayer.width;
       this.physics.world.bounds.height = this.groundLayer.height;
    
       this.player.setCollideWorldBounds(true)

       // camera follow player
        this.cameras.main.startFollow(this.player);
 
       // Prevent black area of edge of the map
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        //collect toys
    this.physics.add.overlap(this.player,[this.gift1, this.gift2, this.gift3, this.gift4, this.gift5, this.gift6,this.gift7, this.gift8, this.gift9, this.gift10], this.hitgift, null, this);

        this.SIGN1 = map.findObject("signboardLayer", (obj) => obj.name === "sign1");

    this.popUp1Area = new Phaser.Geom.Rectangle(
      this.SIGN1.x,
      this.SIGN1.y,
      this.SIGN1.width,
      this.SIGN1.height
    );

    this.dialogText = this.add
    .text(0, 0, "", { 
    fontFamily: "christmaspix",
    fontSize: "17px",
    fill: "#fff9e6ff", 
    stroke: '#352f0aff', 
    strokeThickness: 4 })
    .setOrigin(0.5)  // Center the text
    .setDepth(100)   // Make sure it's above other elements
    .setVisible(false) // Hide it initially



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

  // ---------- MOVEMENT ----------
  this.player.setVelocity(0);

  if (this.cursors.left.isDown) {
    this.player.setVelocityX(-160);
    this.player.anims.play("left", true);
  }
  else if (this.cursors.right.isDown) {
    this.player.setVelocityX(160);
    this.player.anims.play("right", true);
  }
  else if (this.cursors.up.isDown) {
    this.player.setVelocityY(-160);
    this.player.anims.play("up", true);
  }
  else if (this.cursors.down.isDown) {
    this.player.setVelocityY(160);
    this.player.anims.play("down", true);
  }
  else {
    this.player.anims.stop();
  }


  // ---------- TELEPORT AREA ----------
  if (
    this.player.x > 32 &&
    this.player.x < 70 &&
    this.player.y > 320 &&
    this.player.y < 360
  ) {
    console.log("Go to introScene");
    this.introScene(this.player);
  }


  // ---------- DIALOG POPUP ----------
  this.dialogText.setVisible(false);

  if (this.popUp1Area.contains(this.player.x, this.player.y + 10)) {
    this.dialogText.setText("Collect the wrapped toys!");
    this.dialogText.setVisible(true);
  }

  if (this.dialogText.visible) {
    this.dialogText.x = this.player.x;
    this.dialogText.y = this.player.y - 40;
  }

} // ←← END OF UPDATE() — VERY IMPORTANT



// ----------- OUTSIDE UPDATE() -----------
hitgift(player, gift) {
  this.collectKeySnd.play();
  console.log("Player collected gift");

  gift.disableBody(true, true);

  window.gift++;
  console.log("gift", window.gift);
}



// ----------- CHANGE SCENE -----------
introScene(player) {
  console.log("introScene function");

  this.scene.start("introScene", {
    player: player,
    inventory: this.inventory
  });
}
} //////////// end of class world ///////////////////////

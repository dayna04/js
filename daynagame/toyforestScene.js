class toyforestScene extends Phaser.Scene {
  constructor() {
    super({
      key: "toyforestScene",
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
    this.load.tilemapTiledJSON("toyforestScene", "assets/toyforest.tmj");

    this.load.audio("pop","assets/pop.mp3");
    this.load.audio("gameover","assets/gameover.mp3");
    
    this.load.image("christmasImg", "assets/winter/christmas.png");
    this.load.image("snowImg", "assets/winter/snow.png");
    this.load.image("winterImg", "assets/winter/winter.png");
    this.load.image("winter2Img", "assets/winter/winter2.png");
    this.load.image("xmasImg", "assets/winter/xmas.png");
    this.load.image("signImg", "assets/signboard.png");
    this.load.spritesheet("santaImg", "assets/santa.png",{frameWidth:64, frameHeight:64 });
    this.load.spritesheet("bbearImg", "assets/item.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("wbearImg", "assets/item.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("ybusImg", "assets/item.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
      this.load.spritesheet("rbusImg", "assets/item.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("wdollImg", "assets/item.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("bdollImg", "assets/item.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("brobotImg", "assets/item.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("yrobotImg", "assets/item.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("gdinoImg", "assets/item.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("dgdinoImg", "assets/item.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  create() {
    console.log("toyforestScene.js loaded");

    // --- VISUAL TIMER SETUP ---
this.timeLeft = 80; // 3 minutes in seconds

// Timer text
this.timerText = this.add.text(85, 70, `Time: ${this.timeLeft}`, {
  fontFamily: "christmaspix",
  fontSize: "25px",
  fill: "#fff9e6",
  stroke: "#352f0a",
  strokeThickness: 4
}).setScrollFactor(0); // so it stays on the screen

this.timerText.setDepth(999);


    // Countdown event (every 1 sec)
this.time.addEvent({
  delay: 1000,
  callback: this.updateTimer,
  callbackScope: this,
  loop: true,
});

// Display toys collected
window.toysCollected = window.toysCollected || 0;
this.toyText = this.add.text(630, 70, `Toys: ${window.toysCollected || 0}/10`, {
  fontFamily: "christmaspix",
  fontSize: "25px",
  fill: "#fff9e6",
  stroke: "#352f0a",
  strokeThickness: 4
}).setScrollFactor(0);

this.toyText.setDepth(999);

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
      key: "toyforestScene",
    });

    // Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let christmasTiles = map.addTilesetImage("christmas", "christmasImg");
    let snowTiles = map.addTilesetImage("snow", "snowImg");
    let winterTiles = map.addTilesetImage("winter", "winterImg");
    let winter2Tiles = map.addTilesetImage("winter2", "winter2Img");
    let xmasTiles = map.addTilesetImage("xmas", "xmasImg");

    let tilesArray = [christmasTiles, snowTiles, winterTiles, winter2Tiles, xmasTiles]

    // Load in layers by layers
    this.groundLayer = map.createLayer("groundLayer", tilesArray, 0, 0);
    this.treeLayer = map.createLayer("treeLayer", tilesArray, 0, 0);
    this.treeLayer2 = map.createLayer("treeLayer2", tilesArray, 0, 0);
    this.decoLayer = map.createLayer("decoLayer", tilesArray, 0, 0);
    this.objectLayer2 = map.createLayer("signboardLayer", tilesArray, 0, 0);
  
    this.decoLayer.setCollisionByExclusion(-1, true);
    this.treeLayer.setCollisionByExclusion(-1, true);
    this.treeLayer2.setCollisionByExclusion(-1, true);

    // Add any text to the game
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
    
    //whitebear object
    this.anims.create({
      key: "bbear",
      frames: this.anims.generateFrameNumbers("bbearImg", {
        start: 0,
        end: 4,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "wbear",
      frames: this.anims.generateFrameNumbers("wbearImg", {
        start: 5,
        end: 9,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "ybus",
      frames: this.anims.generateFrameNumbers("ybusImg", {
        start: 10,
        end: 14,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "rbus",
      frames: this.anims.generateFrameNumbers("rbusImg", {
        start: 15,
        end: 19,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "wdoll",
      frames: this.anims.generateFrameNumbers("wdollImg", {
        start: 20,
        end: 24,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "bdoll",
      frames: this.anims.generateFrameNumbers("bdollImg", {
        start: 25,
        end: 29,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "brobot",
      frames: this.anims.generateFrameNumbers("brobotImg", {
        start: 30,
        end: 34,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "yrobot",
      frames: this.anims.generateFrameNumbers("yrobotImg", {
        start: 35,
        end: 39,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gdino",
      frames: this.anims.generateFrameNumbers("gdinoImg", {
        start: 40,
        end: 44,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "dgdino",
      frames: this.anims.generateFrameNumbers("dgdinoImg", {
        start: 45,
        end: 50,
      }),
      frameRate: 5,
      repeat: -1,
    });


    //collect items - toys
    this.bbear = this.physics.add
      .sprite(352,352, "bbearImg")
      .setScale (1.5)
      .play("bbear");

    this.wbear = this.physics.add
      .sprite(672,253, "wbearImg")
      .setScale (1.5)
      .play("wbear");

    this.ybus = this.physics.add
      .sprite(352,853, "ybusImg")
      .setScale (1.5)
      .play("ybus");

    this.rbus = this.physics.add
      .sprite(645,1410, "rbusImg")
      .setScale (1.5)
      .play("rbus");

    this.wdoll = this.physics.add
      .sprite(1120,322, "wdollImg")
      .setScale (1.5)
      .play("wdoll");

    this.bdoll = this.physics.add
      .sprite(1632,1456, "bdollImg")
      .setScale (1.5)
      .play("bdoll");

    this.brobot = this.physics.add
      .sprite(1408,970, "brobotImg")
      .setScale (1.5)
      .play("brobot");

    this.yrobot = this.physics.add
      .sprite(1888,352, "yrobotImg")
      .setScale (1.5)
      .play("yrobot");

    this.gdino = this.physics.add
      .sprite(2178,1125, "gdinoImg")
      .setScale (1.5)
      .play("gdino");

    this.dgdino = this.physics.add
      .sprite(2112,693, "dgdinoImg")
      .setScale (1.5)
      .play("dgdino");


      
        this.player = this.physics.add.sprite(100,400, 'santaImg').setScale(1).play('down')
        window.player = this.player;
        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, this.treeLayer)
        this.physics.add.collider(this.player, this.treeLayer2)
        this.physics.add.collider(this.player, this.decoLayer)

      this.physics.world.bounds.width = this.groundLayer.width;
       this.physics.world.bounds.height = this.groundLayer.height;
    
       this.player.setCollideWorldBounds(true)

     // camera follow player
        this.cameras.main.startFollow(this.player);
 
    // Prevent black area of edge of the map
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    //collect toys

    this.toyActions = {
  bbearImg: this.hitBbear,
  wbearImg: this.hitWbear,
  ybusImg: this.hitYbus,
  rbusImg: this.hitRbus,
  wdollImg: this.hitWdoll,
  bdollImg: this.hitBdoll,
  brobotImg: this.hitBrobot,
  yrobotImg: this.hitYrobot,
  gdinoImg: this.hitGdino,
  dgdinoImg: this.hitDgdino,
};

  this.toyGroup = this.physics.add.group([
  this.bbear, this.wbear, this.ybus, this.rbus,
  this.wdoll, this.bdoll, this.brobot, this.yrobot,
  this.gdino, this.dgdino
]);

this.physics.add.overlap(
  this.player,
  this.toyGroup,
  this.handleToyCollision,
  null,
  this
);

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

    this.add.image(160, 100, "signImg").setScale(0.5)
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
      this.player.setVelocity(0);
      this.player.anims.stop();
    }

    // Scene teleport
    if (
      this.player.x > 32 &&
      this.player.x < 64 &&
      this.player.y > 352 &&
      this.player.y < 435
    ) {
      console.log("Go to introScene");
      this.introScene();
    }
      this.dialogText.setVisible(false);

    // Now handle dialog text display
    if (this.popUp1Area.contains(this.player.x, this.player.y + 10)) {
      this.dialogText.setText("step 1: Collect the toys!");
      this.dialogText.setVisible(true);
    } 

    // Update the text position to be above the player
    if (this.dialogText.visible) {
      this.dialogText.x = this.player.x;
      this.dialogText.y = this.player.y - 40; // 40 pixels above the player
  }}  /////////////////// end of update //////////////////////////////

  endGame() {
  console.log("Timer ended → switching to gameoverScene");
  this.sound.play("gameover");
  this.scene.start("gameoverScene");
}
updateTimer() {
  this.timeLeft--;

  // Update on-screen timer
  this.timerText.setText(`Time: ${this.timeLeft}`);

  // When time runs out
  if (this.timeLeft <= 0) {
    this.endGame();
  }
}

    handleToyCollision(player, toy) {
    const action = this.toyActions[toy.texture.key];
    if (action) action.call(this, player, toy);
    toy.disableBody(true, true);
}

     hitWbear(player, wbear) {
    this.collectKeySnd.play();
    console.log("Player collected wbear");

    window.wbear++;
    window.toysCollected++;
    console.log("wbear", window.wbear);

    this.toyText.setText(`Toys: ${window.toysCollected}/10`);

    if (window.toysCollected >= 10) {
      console.log("All toys collected! Going to giftroomScene");
        this.scene.start("giftroomScene", { player: player, inventory: this.inventory });
    }
  }

  hitBbear(player, bbear) {
    this.collectKeySnd.play();
    console.log("Player collected bbear");

    window.bbear++;      
    window.toysCollected++;
    console.log("bbear", window.bbear);

    this.toyText.setText(`Toys: ${window.toysCollected}/10`);

    if (window.toysCollected >= 10) {
      console.log("All toys collected! Going to giftroomScene");
        this.scene.start("giftroomScene", { player: player, inventory: this.inventory });
    }
  }

  hitYbus(player, ybus) {
    this.collectKeySnd.play();
    console.log("Player collected ybus");

    window.ybus++;
    window.toysCollected++;
    console.log("ybus", window.ybus);

    this.toyText.setText(`Toys: ${window.toysCollected}/10`);

    if (window.toysCollected >= 10) {
      console.log("All toys collected! Going to giftroomScene");
        this.scene.start("giftroomScene", { player: player, inventory: this.inventory });
    }
  }

  hitRbus(player, rbus) {
    this.collectKeySnd.play();
    console.log("Player collected rbus");

    window.rbus++;
    window.toysCollected++;
    console.log("rbus", window.rbus);

    this.toyText.setText(`Toys: ${window.toysCollected}/10`);

    if (window.toysCollected >= 10) {
      console.log("All toys collected! Going to giftroomScene");
        this.scene.start("giftroomScene", { player: player, inventory: this.inventory });
    }
  }

  hitWdoll(player, wdoll) {
    this.collectKeySnd.play();
    console.log("Player collected wdoll");

    window.wdoll++;
    window.toysCollected++;
    console.log("wdoll", window.wdoll);

     this.toyText.setText(`Toys: ${window.toysCollected}/10`);

    if (window.toysCollected >= 10) {
      console.log("All toys collected! Going to giftroomScene");
        this.scene.start("giftroomScene", { player: player, inventory: this.inventory });
    }
  }

  hitBdoll(player, bdoll) {
    this.collectKeySnd.play();
    console.log("Player collected bdoll");

    window.bdoll++;
    window.toysCollected++;
    console.log("bdoll", window.bdoll);

     this.toyText.setText(`Toys: ${window.toysCollected}/10`);

    if (window.toysCollected >= 10) {
      console.log("All toys collected! Going to giftroomScene");
        this.scene.start("giftroomScene", { player: player, inventory: this.inventory });
    }
  }

  hitBrobot(player, brobot) {
    this.collectKeySnd.play();
    console.log("Player collected brobot");

    window.brobot++;
    window.toysCollected++;
    console.log("brobot", window.brobot);

    this.toyText.setText(`Toys: ${window.toysCollected}/10`);

    if (window.toysCollected >= 10) {
      console.log("All toys collected! Going to giftroomScene");
        this.scene.start("giftroomScene", { player: player, inventory: this.inventory });
    }
  }

  hitYrobot(player, yrobot) {
    this.collectKeySnd.play();
    console.log("Player collected yrobot");

    window.yrobot++;
    window.toysCollected++;
    console.log("yrobot", window.yrobot);

    this.toyText.setText(`Toys: ${window.toysCollected}/10`);

    if (window.toysCollected >= 10) {
      console.log("All toys collected! Going to giftroomScene");
        this.scene.start("giftroomScene", { player: player, inventory: this.inventory });
    }
  }

  hitGdino(player, gdino) {
    this.collectKeySnd.play();
    console.log("Player collected gdino");

    window.gdino++;
    window.toysCollected++;
    console.log("gdino", window.gdino);

    this.toyText.setText(`Toys: ${window.toysCollected}/10`);

    if (window.toysCollected >= 10) {
      console.log("All toys collected! Going to giftroomScene");
        this.scene.start("giftroomScene", { player: player, inventory: this.inventory });
    }
  }

  hitDgdino(player, dgdino) {
    this.collectKeySnd.play();
    console.log("Player collected dgdino");

    window.dgdino++;
    window.toysCollected++;
    console.log("dgdino", window.dgdino);

    this.toyText.setText(`Toys: ${window.toysCollected}/10`);

    if (window.toysCollected >= 10) {
      console.log("All toys collected! Going to giftroomScene");
        this.scene.start("giftroomScene", { player: player, inventory: this.inventory });
    }
  }

  // Function to jump to room1
  introScene(player, tile) {
    console.log("introScene function");
    this.scene.start("introScene", {
      player: player,
      inventory: this.inventory,
    });
  }
} //////////// end of class world ////////////////////////

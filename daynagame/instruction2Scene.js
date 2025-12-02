class instruction2Scene extends Phaser.Scene {
  constructor() {
    super("instruction2Scene");
  }

  preload() {
    this.load.image("instruction", "assets/instruction.png", {
      frameWidth: 450,
      frameHeight: 450,
    });
  }

  typeText(textObject, message, speed = 40) {
    let i = 0;
    this.time.addEvent({
      delay: speed, // speed of typing
      repeat: message.length - 1,
      callback: () => {
        textObject.text += message[i];
        i++;
      },
    });
  }

  create() {
    console.log("This is instruction2Scene");

    this.add.image(370, 500, "instruction").setScale(2);

    // Start with empty text
    let line1 = this.add.text(80, 310, "", {
      fontFamily: "christmaspix",
      fontSize: "25px",
      fill: "#2e1604",
    });
    let line2 = this.add.text(80, 350, "", {
      fontFamily: "christmaspix",
      fontSize: "25px",
      fill: "#2e1604",
    });
    let line3 = this.add.text(80, 390, "", {
      fontFamily: "christmaspix",
      fontSize: "25px",
      fill: "#2e1604",
    });
    let line4 = this.add.text(80, 590, "", {
      fontFamily: "christmaspix",
      fontSize: "25px",
      fill: "#2e1604",
    });
    let line5 = this.add.text(80, 630, "", {
      fontFamily: "christmaspix",
      fontSize: "25px",
      fill: "#2e1604",
    });
    let line6 = this.add.text(80, 670, "", {
      fontFamily: "christmaspix",
      fontSize: "25px",
      fill: "#2e1604",
    });
    let line7 = this.add.text(170, 40, "", {
      fontFamily: "christmaspix",
      fontSize: "50px",
      fill: "#fff1de",
    });
    let line8 = this.add.text(300, 110, "", {
      fontFamily: "christmaspix",
      fontSize: "20px",
      fill: "#fff1de",
    });

    // Play typewriter animation
    this.typeText(
      line1,
      "Go to the Toy forest and",
      40
    );
    this.time.delayedCall(1000, () => {
      this.typeText(line2, "collect 10 toys", 40);
    });
    this.time.delayedCall(1600, () => {
      this.typeText(line3, "before time is up.", 40);
    });
    this.time.delayedCall(3500, () => {
      this.typeText(line4, "The toys will be wrapped in", 40);
    });
    this.time.delayedCall(4500, () => {
      this.typeText(line5, "the gift room. Collect them", 40);
    });
    this.time.delayedCall(5500, () => {
      this.typeText(line6, "all while the clock is still ticking!", 40);
    });
    this.time.delayedCall(7500, () => {
      this.typeText(line7, "let's help santa", 40);
    });
     this.time.delayedCall(8000, () => {
      this.typeText(line8, "press space to start", 40);
    });

    //this.input.once('pointerdown', function(){
    var spaceDown = this.input.keyboard.addKey("SPACE");

    spaceDown.on(
      "down",
      function () {
        console.log("Spacebar pressed, go to introScene");
        this.scene.start("introScene");
      },
      this
    );
  }
}
